#!/usr/bin/env sh
set -e

npm run build

cd dist

echo 'blog.ollo.ink' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:nanyuantingfeng/nanyuantingfeng.github.io.git master

cd -
