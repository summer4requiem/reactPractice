import React from 'react';
import s from "./Post.module.css"


const AddedPosts = (props) => {
  return (
    <div  className={s.post} >
      <div className={s.postImgWrapper}>
        <img className={s.postImg} src = {props.smallPhoto} alt="" width="50" height="50" />
      </div>
      <div className={s.postRating}>{props.message}
        <div className={s.postBtnWrapper}><button className={s.postLikeSvg}><svg className={s.postLikeSvg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="512" height="512"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256.005" x2="256.005" y1="30" y2="438.078"><stop offset="0" stopColor="#00efd1" /><stop offset="1" stopColor="#00acea" /></linearGradient><path d="m345.263 86.067a116.191 116.191 0 0 0 -89.147 41.133c-21.447-25.98-53.907-41.132-89.369-41.132a116.543 116.543 0 0 0 -116.41 116.411c0 46.987 34.146 98.842 101.489 154.127a728.3 728.3 0 0 0 99.355 68.131 10 10 0 0 0 9.6.026 714.046 714.046 0 0 0 99.386-67.635c67.354-55.061 101.505-107.092 101.505-154.649a116.929 116.929 0 0 0 -116.409-116.412zm2.476 255.39c-38.895 31.829-78.291 55.328-91.7 63.025-13.406-7.779-52.824-31.535-91.742-63.517-77.66-63.816-93.96-110.533-93.96-138.486a96.52 96.52 0 0 1 96.41-96.412c33.52 0 63.723 16.16 80.793 43.3a9.9 9.9 0 0 0 8.383 4.633h.082a9.961 9.961 0 0 0 8.377-4.5 96.681 96.681 0 0 1 177.291 52.97c0 28.336-16.297 75.452-93.934 138.987z" fill="#45688e" /></svg></button>{props.likesCount}</div>
      </div>
    </div>
  )
}

export default AddedPosts;


