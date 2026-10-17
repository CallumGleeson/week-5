import {Text, SafeAreaView, TextInput, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DatePicker from '../components/DatePicker';

import { useState } from 'react';

export default function MovieBooking({ screenstyle }) {
  const [movieChoice, setMovieChoice] = useState("");
  const [totalTickets, setTotaltickets] = useState(1);
  const [movieDate, setMoviedate] = useState(new Date());

  return (
    <View style={screenstyle}>
      <Text style={styles.label}>Choose Movie</Text>

      <Picker
        style={styles.textbox}
        selectedValue={movieChoice}
        onValueChange={(itemValue) => setMovieChoice(itemValue)}>
        <Picker.Item label="Kneecap" value="Kneecap" />
        <Picker.Item label="Joker, Folie a Deux" value="Joker, Folie a Deux" />
      </Picker>

      <DatePicker
        thisDate={movieDate}
        setThisdate={setMoviedate}
        datelabel="Showing Date"
      />

      <Text style={styles.label}>
        Number of Tickets: {totalTickets}
      </Text>

      <Slider
        minimumValue={0}
        maximumValue={5}
        step={1}
        style={styles.sliderstyle}
        onValueChange={setTotaltickets}
      />

      <Text style={styles.label}>Balcony</Text>

      <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
        {/* Part 3: add the Balcony Switch here. */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderstyle: {
    marginBottom: "5%"
  },

  label: {
    flexDirection: "row",
    fontSize: 24,
    fontWeight: "bold"
  },

  textbox: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    width: "100%",
    marginBottom: 14,
    backgroundColor: "white"
  }
});