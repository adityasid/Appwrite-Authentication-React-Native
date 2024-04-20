import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import AppwriteContext from '../../appwrite/AppwriteContext';
import Loading from '../../components/Loading';
import {styles} from './Splash.styles';

const Splash = (props: any) => {
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);
  useEffect(() => {
    console.log('Splash screen');
    appwrite
      .getCurrentUser()
      .then(response => {
        if (response) {
          setIsLoggedIn(true);
          props?.navigation.replace('Home');
        } else {
          setIsLoggedIn(false);
          props?.navigation.navigate('Login');
        }
      })
      .catch(_ => {
        setIsLoggedIn(false);
        props?.navigation.navigate('Login');
      });
  }, []);

  return (
    <View style={styles.container}>
      <Loading />
    </View>
  );
};

export default Splash;
