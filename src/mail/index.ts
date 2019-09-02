import { Promise } from 'bluebird'
import { readFileSync } from 'fs'
import { compile } from 'handlebars'
import { join, resolve } from 'path'

export const compileTemplate = async (
  name: string,
  data: any,
): Promise<string> => {
  try {
    const template = compile(
      readFileSync(
        resolve(join(__dirname, 'templates', `${name}.hbs`)),
      ).toString(),
    )

    return Promise.resolve(template(data))
  } catch (error) {
    return Promise.reject(error)
  }
}
