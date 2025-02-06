import MapView from "react-native-maps";
import { StyleSheet } from "react-native";




export default function Map (props) {
console.log("updating location on map..." + props.location)
   
    return (
        <MapView
            style={styles.map}
            region= {props.location}
            mapType='satellite'
            showsUserLocation={true}
            
        />
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})