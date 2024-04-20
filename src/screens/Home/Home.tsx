import React, {useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
//react native elements
import {FAB} from '@rneui/themed';
//Snackbar
import Snackbar from 'react-native-snackbar';

//context API
import {AppwriteContext} from '../../appwrite/AppwriteContext';
import {styles} from './Home.styles';

type UserObj = {
  name: String;
  email: String;
};

const Home = (props: any) => {
  const [userData, setUserData] = useState<UserObj>();
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT,
      });
      props?.navigation.navigate('Login');
    });
  };

  useEffect(() => {
    console.log('Home screen');

    appwrite.getCurrentUser().then(response => {
      if (response) {
        const user: UserObj = {
          name: response.name,
          email: response.email,
        };
        setUserData(user);
      }
    });
  }, [appwrite]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={{
            uri: 'https://appwrite.io/images-ee/blog/og-private-beta.png',
            width: 400,
            height: 300,
            cache: 'default',
          }}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          Build Fast. Scale Big. All in One Place.
        </Text>
        {userData && (
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>Name: {userData.name}</Text>
            <Text style={styles.userDetails}>Email: {userData.email}</Text>
          </View>
        )}
      </View>
      <FAB
        placement="right"
        color="#f02e65"
        size="large"
        title="Logout"
        icon={{name: 'logout', color: '#FFFFFF'}}
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
};

export default Home;
