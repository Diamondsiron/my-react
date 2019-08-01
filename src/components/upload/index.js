import React from  'react'
import AliOSS from 'ali-oss'
import ImageCompresseor from 'image-compressor.js'

function Upload(props){
    const ref = React.createRef();
    const imageCompressor = new ImageCompresseor();
    const dir='image/platform/'
    const options = {
        //          progress: this.progress,
        partSize: 100 * 1024,
        meta: {
          year: 2018,
          people: 'test'
        }
      }
    var client = new AliOSS({
        region:'oss-cn-beijing',
        bucket:'moby-oss-dev',
        accessKeyId:'LTAI1agzaBG5gXHe',
        accessKeySecret:'WoNjdktSwLGSEQAsxYWkMkALUuz2CI'
    })
    function selectFile(props){
        console.log(ref)
        ref.current.click()
    
    }
    async function a(e){
        console.log('上传')
        let files = e.currentTarget.files
        let file = files[0]
        file = await imageCompressor.compress(file, {maxWidth: 750})
        let name = file.name
        let pos = name.lastIndexOf('.')
        let suffix = ''
        if (pos != -1) {
          suffix = name.substring(pos)
        }

        let key = `${name.substring(0, pos)}-${new Date().getTime()}${suffix}`
        await client.multipartUpload(dir+key, file, options).then(res=>{
            console.log(res)
            let filename = '//'
            if (false){
                filename += `${this.customDomain}/${res.name}`
            }else{
                filename += `moby-oss-dev.oss-cn-beijing.aliyuncs.com/${
                    res.name
                  }`
            }
            console.log(filename) 
        })
    }
    return (
        <div>
            <div onClick={selectFile}>111
            </div>   
            <div className="upload-input" onClick={a} >222
            </div>        
            <input type='file' className="upload-input" onChange={a} ref={ref}/>
        </div>
    )
}

export default Upload