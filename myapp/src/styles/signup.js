import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    form: {
        padding: "20px",
        display:"flex",
        flexDirection:"column",
        gap:"20px",
    },
    formGroup: {
        display:"flex",
        flexWrap:"wrap",
        maxWidth:"800px",
        margin:"0px auto",
        gap:"20px"
    },
    formItem:{
        width:"48%",
        display:"flex",
        flexDirection:"column",
        marginBottom:"10px",
        // marginRight:"10px"
    },
    title:{
        width:"100%",
        borderBottom:"grey 2px solid",
        fontSize:"20px",
        fontWeight:"400",
        paddingBottom:"10px"
    },err:{
        color:"red",
        fontSize:"14px",
        letterSpacing:"2px",
        fontWeight:"300"
    }
})

export default useStyles