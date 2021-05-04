const photo = document.querySelector("#profilePhoto");

photo.addEventListener('change', () =>{
    let userPhoto = document.querySelector("#profilePhoto").files[0];
    let userPhotoURL = URL.createObjectURL(userPhoto);
    localStorage.setItem('photo', userPhotoURL);
    console.log(localStorage.getItem('photo'));
})
