<!-- ********************REACT NATIVE LEARNING***************************************************** -->

1. reactnative.dev official site.
2. Defference between expo cli and react native cli(command line interface).
3. Start with expo -> npm install -g expo-cli
4. node_modules hold all the third party packages which we use in our app.
5. What is the use of package.json
   package.json lists all the dependencies of our project.
   "scripts": {
   "start": "expo start",
   "android": "expo start --android",
   "ios": "expo start --ios",
   "web": "expo start --web"
   },
   we can run all command which given by script object with the help of npm.
6. Android studio allows you to run android emulators on your local machine.
7. xcode is for apples/ios developers environment for building ios app.
8. https://github.com/academind/react-native-practical-guide-code.
9. Native devices arer not browsers , they dont have that dom and they dont supports html elements.
10. Just download expo project,create virtual device in android studio,open project in visual studio run command npm start,and the run as android so first your app will be installed in the virtual device and then it will open our app.
11. There is no css in native so we can add style inline in the oomponent or StyleSheet objects.
12. style prop is supported in View and Text component.
13. https://reactnative.dev/docs/style
14. https://reactnative.dev/docs/colors
15. Flexbox is important for layouts.
    Flexbox is a key approach/a key conecpt which is basically a collection of css properties that you us, how is look like.
    eg flex-direction row , column.
    justify-content::space-between , align-item center
16. ScrollView is use for scrollable list.
17. ScrollView load all the items whenever your component will render.and if you have a list of 200 items and only 20 items is on the screen but remaining 180 items also be loaded using scrollView and it will give performance issues.
    Solution:FlatList component
18. Flatlist is the component that helps for scrolling and internally it will render only that items that will actually visible on the screen.and all the items that are off screen will only be loaded and rendered lazily as they are needed.
    Flatlist has props data(takes array) , renderItem(function that return list),keyExtractor(should be unique id).Flatlist is good that scrollview for performace.
19. filter() return new array which is the old array minus all the items we filtered out.filter takes a call back function which has to be return true or false , if it return true item will capped if it return fase item will dropped.
20. bind() i a standard javascript function which basicallly allows you to pre configure a function for future execution.First value you pass to bind is this keyword, and second will be the id that shoud be use.
21. In react native we can style out screen using Stylesceet module.It is not a css .Its javascript and under the hood react native translate our styles to the native style instruction.
22. Image component is use to show the image source={require("../assets/images/goal.jpg")}
23. Modal is inbuilt coponent in react-native which is basiclly popup open close.
24. Pressable is a component which is bascially like a button for event handelling.
