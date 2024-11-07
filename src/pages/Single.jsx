import React from 'react'
import { Link } from "react-router-dom";
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Menu } from '../components/Menu';

const Single = () => {

 


  return (
    <div className='single'>
        <div className="content">
          <img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" alt="" />
          <div className="user">
            <img src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg" alt="" /> 
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/Write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              
              <img src={Delete} alt="" />
            </div>

          </div>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae malesuada lacus. Aliquam interdum ipsum at aliquam bibendum. Nulla diam est, faucibus non iaculis sed, pharetra quis purus.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae malesuada lacus. Aliquam interdum ipsum at aliquam bibendum. Nulla diam est, faucibus non iaculis sed, pharetra quis purus. Quisque varius sem in nisl facilisis ornare. Nulla sed odio rutrum leo facilisis efficitur in sed tortor. Integer eget pulvinar sem. Pellentesque elementum id felis sed congue. Etiam et dolor eget risus pharetra mollis eu suscipit tellus. Nam interdum lacus non urna fringilla, id efficitur turpis semper. Vestibulum molestie urna vel nisi fermentum, vitae blandit orci tristique. Praesent id nisl varius, tincidunt nibh ac, rhoncus libero. Nulla nec imperdiet ligula. Curabitur vel nunc iaculis, hendrerit velit sit amet, aliquam odio. Quisque tempus turpis sit amet tincidunt condimentum. Etiam varius dignissim lobortis. Sed at cursus metus, ac dapibus sem.

Sed sed tortor pharetra, aliquet tortor ut, rhoncus diam. Vivamus lacinia suscipit aliquam. Quisque tempus malesuada tortor non bibendum. Fusce ac magna eget nisl dignissim dignissim. Phasellus quis tellus eget metus sodales dignissim. Morbi ut lectus enim. Duis sit amet iaculis diam. Donec interdum sagittis magna, vitae interdum enim interdum id. Integer dictum varius augue, vitae sagittis magna posuere nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue ipsum ut elit convallis, ut lobortis mi luctus. Nulla mattis erat a mi placerat blandit. Quisque nec sollicitudin metus. Aliquam erat volutpat. Phasellus quis lacinia eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Maecenas dignissim sagittis sem. In euismod velit at sapien viverra posuere. Nam molestie luctus mauris nec iaculis. Duis laoreet laoreet turpis ac eleifend. Maecenas ex tellus, porttitor eu quam dignissim, sodales elementum neque. Quisque id ex eget magna pharetra semper. Cras rutrum gravida dui, nec eleifend dui varius ac. In porttitor diam sit amet diam rhoncus semper. Mauris at accumsan justo.

Pellentesque pharetra arcu id vestibulum commodo. Praesent cursus ligula vitae turpis ornare, eu rutrum dui iaculis. Nulla sagittis dictum diam ut bibendum. Vestibulum tempus consectetur porta. In ultricies aliquam tellus, et egestas purus mattis et. Aenean consequat, lorem sed posuere fermentum, arcu justo suscipit enim, in porta leo elit non elit. Praesent ut laoreet odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit neque malesuada enim rhoncus venenatis.

Sed rutrum mollis felis, id commodo sapien posuere sed. Nam semper tellus sit amet sapien tincidunt imperdiet. Sed lacinia mi quam, ut cursus libero vestibulum a. Donec porttitor justo sem, at egestas metus fringilla in. Phasellus convallis porta condimentum. Integer facilisis felis est, quis fringilla libero aliquam at. Praesent a enim vestibulum, consequat velit in, varius nibh. Vivamus dictum eget ligula et cursus. Vivamus ut pharetra ex. Sed dignissim nisi nunc, vel lacinia lacus congue pharetra. In euismod mollis mi quis commodo.</p>
        </div>
        <Menu/>
    </div>
  )
}

export default Single