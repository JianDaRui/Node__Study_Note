const program = require("commander")
const { createProjectAction, addCpnAction, addPageAndRouteAction, addStoreAction } = require('./action')

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("clone repository into a folder")
    .action(createProjectAction)

  program
    .command("addcpn <name>")
    .description("add vue component, 例如: coder appcpn HelloWorld -d src/component")
    .action((name) => {
      addCpnAction(name, program.dest || 'src/components');
    });

    program
    .command('addpage <page>')
    .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
    .action((page) => {
      addPageAndRouteAction(page, program.dest || 'src/pages')
    })

  program
  .command('addstore <store>')
  .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
  .action((store) => {
    addStoreAction(store, program.dest || 'src/store/modules')
  })
}

module.exports = createCommands