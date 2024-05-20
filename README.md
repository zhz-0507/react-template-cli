<h1 align="center">react18 模板</h1>
## 👨🏻‍💻 项目说明
用于个人项目reactt18模板，可以快速开发项目，减少开发成本。
目前不断完善功能中～，会结合ci/cd在自动化构建

## 📦 安装
npm install
## 📦 运行
npm run start 
## 📦 构建
npm run build

## 📦 react-redux流程
1.configureStore去创建一个redux的store
2.在<App></App>的根组件外层去包裹一个<Provider>组件
3.将 Redux store 作为 <Provider store={store}> 传递
4.createSlice去创建一个redux的reducer
5.导出生成的 slice reducer 和 action creators
6.在react组件中useSelector去获取store中的数据
7.在react组件中useDispatch去触发action
