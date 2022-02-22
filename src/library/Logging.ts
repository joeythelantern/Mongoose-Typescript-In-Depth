import chalk from 'chalk';

export default class Logging {
    public static info = (args: any) => console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), chalk.blueBright(args));
    public static warning = (args: any) => console.log(chalk.yellow(`[${new Date().toLocaleString()}] [WARN]`), chalk.yellowBright(args));
    public static error = (args: any) => console.log(chalk.red(`[${new Date().toLocaleString()}] [ERROR]`), chalk.redBright(args));
}
