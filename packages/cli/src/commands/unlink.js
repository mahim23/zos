'use strict'

import unlink from '../scripts/unlink'
import push from './push'

const name = 'unlink'
const signature = `${name} [libraries...]`
const description = 'unlinks libraries from the project. Provide a list of whitespace-separated library names'

const register = program => program
  .command(signature, { noHelp: true })
  .usage('[dependencyName1 ... dependencyNameN]')
  .description(description)
  .withPushOptions()
  .action(action)

async function action(libNames, options) {
  await unlink({ libNames })
  await push.tryAction(options)
}

export default { name, signature, description, register, action }
