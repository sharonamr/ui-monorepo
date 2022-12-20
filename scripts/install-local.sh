npm uninstall @ui-monorepo/components -w=docs
unlink node_modules/@ui-monorepo/components
npm run build -w packages/components
PACKAGE=$( cd packages/components && npm pack )
rm -rf packages/components/dist
echo PACKAGE=$PACKAGE
npm install --no-save packages/components/$PACKAGE -w docs
rm packages/components/$PACKAGE