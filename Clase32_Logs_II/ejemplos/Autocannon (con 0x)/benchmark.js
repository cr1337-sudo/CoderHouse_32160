import autocannon from 'autocannon'
import { PassThrough } from 'stream'

function run(url) {
  const buf = []
  const outputStream = new PassThrough()

  const inst = autocannon({
    url,
    connections: 100,
    duration: 20
  })

  autocannon.track(inst, { outputStream })

  outputStream.on('data', data => buf.push(data))
  inst.on('done', () => {
    process.stdout.write(Buffer.concat(buf))
  })
}

console.log('Running all benchmarks in parallel ...')

run('http://localhost:8080/auth-bloq?username=cristian&password=123456')
run('http://localhost:8080/auth-nobloq?username=cristian&password=123456')
