import { StyleSheet } from "react-native"

const primary="#D9D9D9"

const styles = StyleSheet.create({
test:{

}
}
)
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


export const txt100={fontSize:16}
export const txt200={fontSize:20}
export const txt300={fontSize:24}
export const txt400={fontSize:32}
export const txt500={fontSize:36}
export const txt600={fontSize:40}
export const txt700={fontSize:48}
export const txt800={fontSize:64}


export const txtBold={fontWeight:"bold"}




// components

export const textInput = {
    paddingHorizontal:20,
    paddingVertical:15,
    width:"100%",
    borderRadius:"15%",
    borderWidth:1,
    borderColor:primary
}