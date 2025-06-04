import { Tabs } from "expo-router";

const TabLayout = () => {

    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home Page' }} />
            <Tabs.Screen name="setting" options={{ title: 'Setting' }} />
        </Tabs>
    );
}

export default TabLayout;