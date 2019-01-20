const Client = require('ssh2-sftp-client')
const ora = require('ora')
const path = require('path')
const glob = require('glob')
const fs = require('fs-extra');
const sftp = new Client()

// 本地目录
const localPath = path.join(__dirname, '../dist').replace(/\\/g, '/')
console.log(localPath)
// 远程目录
const remotePath = '/root/pwa-project/'
// 允许上传的文件扩展名
const allowFiles = ['html', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'eot', 'svg', 'ttf', 'woff']

const spinner = ora('开始上传...').start()

function isFolderExists() {
  fs.ensureDir(remotePath).then(() => {
    console.log('ssssss')
  })
}
// isFolderExists()


// 连接 sftp
sftp.connect({
  host: '118.24.204.233',
  port: '22',
  username: 'root',
  password: '110502224aa@@@'
})
.then(() => {
  // 先删除目录
  console.log(1111)
  console.log(remotePath)
  return sftp.rmdir(remotePath, true)
}).then(() => {
  // 再创建目录
  console.log(2222)
  console.log(`${remotePath}css`)
  console.log(`${remotePath}js`)
  // return sftp.mkdir(`${remotePath}css`, true)
  return Promise.all([
    sftp.mkdir(`${remotePath}css`, true),
  ])
}).then(() => {
  return Promise.all([
    sftp.mkdir(`${remotePath}js`, true)
  ])
}).then(() => {
  // 上传所有匹配到的文件
  console.log(333)
  const files = glob.sync(`${localPath}/*.{${allowFiles.join(',')}}`)
  return Promise.all(
    files.map(localFile => {
      const remoteFile = localFile.replace(localPath, remotePath)
      return sftp.put(localFile, remoteFile)
    })
  )
}).then(() => {
  spinner.succeed('上传完成')
  process.exit()
}).catch(err => {
  spinner.fail('上传失败')
  process.exit()
})
