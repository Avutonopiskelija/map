import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { useState } from "react";




export default function Map (props) {

    const [markers, setMarkers] = useState([])

    const addMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarkers((prevMarkers) => [...prevMarkers, coords])
      }
   
    return (
        <MapView
            style={styles.map}
            region= {props.location}
            mapType='satellite'
            showsUserLocation={true}
            onLongPress={addMarker}
        >
            {markers.map((marker,index)  => (
            <Marker 
                key={index}
                title={`My marker ${index + 1}`}
                coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
            />
            ))}
        </MapView>
            
            
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})