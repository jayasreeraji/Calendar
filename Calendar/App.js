import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Alert,
  Linking,
  View,
  Text,
  Button,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import InModal from './components/model';
const App = () => {
  const [mark, setMark] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('');
  const OpenWEB = () => {
    Linking.openURL('https://www.google.com/');
  };
  const OpenMail = () => {
    Linking.openURL('https://mail.google.com/');
  };
  return (
    <ScrollView style={styles.container}>
      <Calendar
        style={styles.calendar}
        allowRangeSelection={true}
        displayLoadingIndicator
        markingType={'period'}
        theme={{
          calendarBackground: '#000000',
          textSectionTitleColor: 'white',
          dayTextColor: 'green',
          todayTextColor: 'blue',
          selectedDayTextColor: 'yellow',
          monthTextColor: 'red',
          selectedDayBackgroundColor: '#fff00f',
          arrowColor: 'white',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          },
        }}
        onDayLongPress={e => {
          setDate(e.dateString);
          setModalVisible(true);
        }}
        enableSwipeMonths={true}
        onDayPress={e => {
          let message = mark[e.dateString]
            ? mark[e.dateString]?.msg
            : 'No remainder';
          return Alert.alert('Remainder', message);
        }}
        markedDates={mark}
        hideArrows={false}
      />
      <Button onPress={OpenWEB} title="Open web" />
      <Button onPress={OpenMail} title="Open mail" color="#999000" />
      <InModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        d
        ate={date}
        mark={mark}
        setMark={setMark}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    marginTop: '50%',
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
export default App;
