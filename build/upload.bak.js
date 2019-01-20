const Client = require('ssh2-sftp-client')
const ora = require('ora')
const path = require('path')
const glob = require('glob')
// const fs= require('fs')
const sftp = new Client()

// 本地目录
// const localPath = path.join(__dirname, '../dist').replace(/\\/g, '/')
const localPath = path.join(__dirname, '../').replace(/\\/g, '/')
// 远程目录
const remotePath = '/root'
// 允许上传的文件扩展名
const allowFiles = ['html', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'eot', 'svg', 'ttf', 'woff']

const spinner = ora('开始上传...').start()

// 连接 sftp
sftp.connect({
  host: '118.24.204.233',
  port: '22',
  username: 'root',
  password: '110502224aa@@@'
}).then(() => {
  // 先删除备份文件
  console.log(1111)
  console.log(`${remotePath}/dist.bak`)
  // fs.exists(`${remotePath}/dist.bak`, (a) => {
  //    console.log(a)
  //    console.log('a')
  // })
//  return sftp.rmdir(`${remotePath}/dist.bak`, true)
 return Promise.all([
   sftp.rmdir(`${remotePath}/dist.bak`, true)
   stfp.mkdir(`${remotePath}/dist`, true)
 ])
})
.then(() => {
  // 备份文件
  console.log(2222)
  return sftp.rename(`${remotePath}/dist`, `${remotePath}/dist.bak`);
})
.then(() => {
  // 再创建目录
  console.log(444)
  console.log(remotePath)
  return Promise.all([
    sftp.mkdir(`${remotePath}/dist/static/fonts`, true),
    sftp.mkdir(`${remotePath}/dist/static/img`, true),
    sftp.mkdir(`${remotePath}/dist/static/css`, true),
    sftp.mkdir(`${remotePath}/dist/static/js`, true)
  ])
}).then(() => {
  console.log(555)
  // 上传所有匹配到的文件  不能上传文件夹
  const files = glob.sync(`${localPath}/**/*.{${allowFiles.join(',')}}`)
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
