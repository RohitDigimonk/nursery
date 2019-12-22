import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { withNavigation } from 'react-navigation';
import RNFetchBlob from "react-native-fetch-blob";

class Download extends Component {

    data = this.props.data
    nurseryDoc = this.data['nurseryDoc']
    document = this.nurseryDoc['document']
   
    // url = "https://digimonk.co/tinyland/uploads/nursery_document/Registration_Form1.pdf"
    
    
        
      // componentDidMount(){
      //   var that = this;
      //   //Checking for the permission just after component loaded
      //   async function requestWritePermission() {
      //     //Calling the permission function
      //     const granted = await PermissionsAndroid.request(
      //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      //       {
      //         title: 'AndoridPermissionExample Write Storage Permission',
      //         message: 'AndoridPermissionExample App needs access to your storage ',
      //       }
      //     );
      //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //       that.proceed();
      //     } else {
      //       alert('WRITE Permission Denied.');
      //     }
      //   }
      //   if (Platform.OS === 'android') {
      //     requestWritePermission();
      //   } else {
      //     this.proceed();
      //   }

      // }



    download = (document) => {

        var that = this;
        //Checking for the permission just after component loaded
        async function requestWritePermission() {
          //Calling the permission function
          const granted = await PermissionsAndroid.request
          (
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            // {
            //   title: 'AndoridPermissionExample Write Storage Permission',
            //   message: 'AndoridPermissionExample App needs access to your storage ',
            // }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // that.proceed();
                    const { config, fs } = RNFetchBlob
    let PictureDir = fs.dirs.DownloadDir // this is the pictures directory. You can check the available directories in the wiki.
    let options = {
    fileCache: true,
    addAndroidDownloads : {
    useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
    notification : true,
    path:  PictureDir + "/nursery_document", // this is the path where your downloaded file will live in
    description : 'Downloading.'
  }
}
config(options).fetch('GET', document).then((res) => {
  // do some magic here
})
          } else {
            alert('WRITE Permission Denied.');
          }
        }
        if (Platform.OS === 'android') {
          requestWritePermission();
        } else {
          this.proceed();
        }

//         const { config, fs } = RNFetchBlob
//     let PictureDir = fs.dirs.DownloadDir // this is the pictures directory. You can check the available directories in the wiki.
//     let options = {
//     fileCache: true,
//     addAndroidDownloads : {
//     useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
//     notification : true,
//     path:  PictureDir + "/nursery_document", // this is the path where your downloaded file will live in
//     description : 'Downloading.'
//   }
// }
// config(options).fetch('GET', document).then((res) => {
//   // do some magic here
// })

    }

    render(){
        console.log(this.nurseryDoc)
        return(
            <ImageBackground
            source={require('../Images/dashboard_background.png')}
            style={{width: "100%", height: "100%"}}
            >
                { this.nurseryDoc.map(value =>

            <View style={Styles.viewcontainer}>
                <Text style={{fontSize: 20, fontWeight: '800', marginTop: 15,fontFamily : 'Poppins'}}>
                    {value.nurserydoc_name}
                </Text>
                <TouchableOpacity onPress={()=>this.download(value.document)}>
                <ImageBackground
                source={require('../Images/registration_button.png')}
                style={{width: 135, height: 35, marginTop: 15, alignItems: 'center', marginRight: 10}}
                >
                <Text style={{color: '#ffffff',fontFamily : 'Poppins'}}>Download</Text>
                <Image
                source={require('../Images/download.png')}
                style={{width: 12, height: 15, marginBottom: 15 }}
                >
                        
                </Image>
                </ImageBackground>
                </TouchableOpacity>
            </View>
        )
                }
            </ImageBackground>
        );
    }
}

const Styles = {
    viewcontainer:{
        borderWidth: 0.1,
        height: 60,
        borderRadius: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        PaddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        

        
        
        
    }
}

export default withNavigation(Download);