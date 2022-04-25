import {execa} from "execa";


;(async () => {
  try {
    const { stdout: currentBranch } = await execa.command('git branch --show-current')
    await execa.command('git checkout --orphan gh-pages')

    await execa.command('npm run build', { stdio: 'inherit' })
    await execa.command('git --work-tree dist add --all')
    await execa.command('git --work-tree dist commit -m "gh-pages"')

    await execa.command('git push origin HEAD:gh-pages --force', { stdio: 'inherit' })
    //await execa.command('rm -r dist')
    await execa.command(`git checkout -f ${currentBranch}`)
    await execa.command('git branch -D gh-pages')

  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
