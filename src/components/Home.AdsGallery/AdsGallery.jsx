import { ADS_IMG } from '../../assets/staticPaths'
import style from './AdsGallery.module.css'

const imgList = [ ADS_IMG +"ads-1.jpg",  ADS_IMG +"ads-2.jpg"]

const AdsGallery = ({ n, m }) => {
    const exampel = n

    const st={
        gridTemplateColumns: `repeat(${m} , minmax(21rem , 1fr))`
    }
  
    return (
        <div className={style["ads"]}>
            <div className={style["ads-content"]} style={st} >
                {exampel.map((i, idx) =>

                    <div key={idx}>
                        <img src={imgList[i]} alt="" />
                    </div>
                )}

            </div>
        </div>
    )
}
export default AdsGallery