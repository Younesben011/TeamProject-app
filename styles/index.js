import { StyleSheet } from "react-native"
import { Typography } from "./constants"
import {primary700} from "./Colors"


const styles = StyleSheet.create({
test:{
    fontWeight:"bold",

}
}
)


// layouts
export const columns={
    display:"flex",
    flexDirection:"column",
    gap:10,
    width:"100%",
    paddingHorizontal:40
    
}

export const rows={
    display:"flex",
    flexDirection:"row",
    gap:10
}
export const colummhalf={flex:.5}
export const columm10={flex:.1}
export const columm25={flex:.25}
export const columm35={flex:.35}
export const flex1={flex:1}



// Typography styles
export const Heading01={
    fontFamily:Typography.fontFamily,
    fontSize:Typography.headind01,
    fontWeight:"bold",
    color:primary700,
}
export const Heading02={
    fontFamily:Typography.fontFamily,
    fontSize:Typography.headind02,
    fontWeight:"bold"
}

export const Heading03={
    fontFamily:Typography.fontFamily,
    fontSize:Typography.headind03,
    fontWeight:"bold"
}

export const Paragraph01={
    fontFamily:Typography.fontFamily,
    fontSize:Typography.paragraph01,
    fontWeight:100
}
export const Paragraph02={
    fontFamily:Typography.fontFamily,
    fontSize:Typography.paragraph02,
    fontWeight:100
}
export const Paragraph03={
    fontFamily:Typography.fontFamily,
    fontSize:Typography.paragraph03,
    fontWeight:100
}



export const fullcenterItems ={
    width:"100%",
    height:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}
export const centerItems ={
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}

export const alignTopRight={
    position:"absolute",
    right:0,
    top:0,
}

// components

export const textInput = {
    paddingHorizontal:20,
    paddingVertical:15,
    width:"100%",
    borderRadius:20,
    borderWidth:1,
    borderColor:primary700
}


