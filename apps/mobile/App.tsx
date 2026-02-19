import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Dashboard } from './Dashboard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Dashboard />
    </SafeAreaView>
  );
}

export default App;
