import React from 'react';
import IndexTitle from '../../components/index-title'
import Upload from '../../components/upload'

function checkIn() {

    let a = ['车辆档案', '外观仪表拍摄', '选车人员', '备注信息']
    return (
      <div className="App">
        <IndexTitle title={a[0]}></IndexTitle>
        <div className="content">
          <div>
            <span>车牌号</span>
            <input/>
          </div>
          <div>
            <span>服务类型</span>
            <input type="checkbox" value="保养"/>保养
            <input type="checkbox" value="维修/索赔"/>维修/索赔
            <input type="checkbox" value="保险/钣喷"/>保险/钣喷
          </div>
          <div>
            <span>公里数</span>
            <input/>
          </div>
          <div>
            <span>油量</span>
            <input type="checkbox" value="满"/>满
            <input type="checkbox" value="3/4"/>3/4
            <input type="checkbox" value="1/2"/>1/2
            <input type="checkbox" value="1/4"/>1/4
            <input type="checkbox" value="少量"/>少量
          </div>
          <div>
            <span>二维码编号</span>
            <span>12345678</span>
          </div>
          <div>
            <span>二维码状态</span>
            <span>未激活/已激活</span>
          </div>
        </div>
        <IndexTitle title={a[1]}></IndexTitle>
        <div>
          <Upload/>
        </div>
        <IndexTitle title={a[2]}></IndexTitle>
        <div>
          
        </div>
        <IndexTitle title={a[3]}></IndexTitle>
        <div>
          
        </div>
      </div>
    );
  }
  
  export default checkIn;