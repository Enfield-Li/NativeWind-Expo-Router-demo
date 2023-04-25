# Trying out React Native development

### **Using typescript, [Expo framework](https://expo.dev/) and [tailwindcss](https://tailwindcss.com/) for styling([TailNative integration](https://www.nativewind.dev/))**

reverse port for localhost connection:

```
adb reverse tcp:8099 tcp:8099
```

components:

```
// icon
import Icon from "react-native-vector-icons/FontAwesome";
<Icon size="{70}" name="paper-plane" color="rgb(122, 104, 240)" />

// button
<TouchableOpacity
  href="my_test"
  className="w-11/12 bg-purple-500 py-3 rounded-lg mx-auto mb-6 text-center"
>
  <Text className="text-white">Get started</Text>
</TouchableOpacity>
```


Build:
`eas build -p android`