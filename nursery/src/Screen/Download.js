import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RNFetchBlob from "react-native-fetch-blob";

class Download extends Component {

    data = this.props.data
    nurseryDoc = this.data['nurseryDoc']
    document = this.nurseryDoc['document']

    url = "http://203.190.153.20/tinyland/uploads/nursery_document"

    download = (document) => {
        const { config, fs } = RNFetchBlob
    let PictureDir = fs.dirs.DownloadDir // this is the pictures directory. You can check the available directories in the wiki.
    let options = {
    fileCache: true,
    addAndroidDownloads : {
    useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
    notification : true,
    path:  PictureDir + "/me_", // this is the path where your downloaded file will live in
    description : 'Downloading image.'
  }
}
config(options).fetch('GET', document).then((res) => {
  // do some magic here
})

    }

    render(){
        // console.log(this.document)
        return(
            <ImageBackground
            source={require('../Images/dashboard_background.png')}
            style={{width: "100%", height: "100%"}}
            >
                { this.nurseryDoc.map(value =>

            <View style={Styles.viewcontainer}>
                <Text style={{fontSize: 20, fontWeight: '800', marginTop: 15}}>
                    {value.nurserydoc_name}
                </Text>
                <TouchableOpacity onPress={this.download(value.document)}>
                <ImageBackground
                source={require('../Images/registration_button.png')}
                style={{width: 135, height: 35, marginTop: 15, alignItems: 'center', marginRight: 10}}
                >
                <Text style={{color: '#ffffff'}}>Download</Text>
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