import { StyleSheet } from "react-native"
import { Typography } from "./constants"
import {dark200, dark500, primary700} from "./Colors"


const styles = StyleSheet.create({
test:{
    fontWeight:"bold",
    
}
}
)


// layouts
export const columns={
    width:"90%",
    alignSelf:"center",
    display:"flex",
    flexDirection:"column",
    gap:10,
    
}
export const spaceBetween={
    justifyContent:"space-between"

    
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

export const HeadingS={
    fontFamily:Typography.headind01.fontFamily,
    fontSize:32,
    color:primary700,
    lineHeight:35
}


export const Heading01={
    fontFamily:Typography.headind01.fontFamily,
    fontSize:Typography.headind01.fontSize,
    color:primary700,
    lineHeight:35
}
export const Heading02={
    fontFamily:Typography.headind02.fontFamily,
    fontSize:Typography.headind02.fontSize,
    lineHeight:35
}

export const Heading03={
    fontFamily:Typography.headind03.fontFamily,
    fontSize:Typography.headind03.fontSize,
}

export const Paragraph01={
    fontFamily:Typography.paragraph01.fontFamily,
    fontSize:Typography.paragraph01.fontSize,
    lineHeight:Typography.paragraph01.fontSize+1,

}
export const Paragraph02={
    fontFamily:Typography.paragraph02.fontFamily,
    fontSize:Typography.paragraph02.fontSize,
    lineHeight:14,
}
export const Paragraph03={
    fontFamily:Typography.paragraph03.fontFamily,
    fontSize:Typography.paragraph03.fontSize,
    lineHeight:11
}



export const fullSize ={
    width:"100%",
    height:"100%",
}
export const fullcenterItems ={
    width:"100%",
    height:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
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
export const alignCenterRight={
    position:"absolute",
    right:0,
    top:"50%"
}
export const alignbottomLeft={
    position:"absolute",    
    width:"100%",
    height:"100%",
    left:0,
    bottom:0,
 }
export const alignTopLeft={
    position:"absolute",    
    left:0,
    top:0,
 }
export const alignBottomCenter={
    position:"absolute",    
    bottom:0,
    alignSelf:"center"
 }

// components




// effects
export const shadowProps={
    shadowOffset: {width:0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 2,
}


