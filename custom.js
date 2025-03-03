const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
        '<img src="images/design-7593741_1280.jpg" alt=""/>';
    title.innerHTML = "Lorem ipsum dolor sit amet";
    excerpt.innerHTML =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";


    profile_img.innerHTML = '<img src="images/ai-generated-8547238_1280.png" alt="Profile Image" />';

    name.innerHTML = 'John Doe';
    date.innerHTML = 'Sep 25, 2024';

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
