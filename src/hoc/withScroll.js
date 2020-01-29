import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const withScroll = Component => (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Component {...props}/>
            </ScrollView>
        </SafeAreaView> 
    );
}

export default withScroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
  }
});
