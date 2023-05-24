import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    form: {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "800px",
        width: "80%",
        margin: "0px auto",
        '@media (max-width:750px)': {
            width: "100%"
        }
    },
    formGroup: {
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        width: "100%"
    },
    formItem: {
        width: "48%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        // marginRight:"10px"
    },
    title: {
        width: "100%",
        borderBottom: "grey 2px solid",
        fontSize: "20px",
        fontWeight: "400",
        paddingBottom: "10px"
    }, err: {
        color: "red",
        fontSize: "14px",
        letterSpacing: "2px",
        fontWeight: "300"
    },
    submit: {
        width: "50%",
        alignSelf: "center"
    }
})

export default useStyles