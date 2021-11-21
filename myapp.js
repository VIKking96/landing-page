//declaring the navbar variables
let sections = document.querySelectorAll('section');
let arr = [...sections];
const Container = document.querySelector('#navbar__list');
//Step 1
/*Since the navebar is made of three main tags : ul,li,a , THerefore iam going to go over them in that order to recreate them for whenever a new section is added giving them the number given in datanav
using scrollIntoView we can set the sroll stop pos. and set scroll to smooth, achieving the first requirement*/

sections.forEach(section => {
    let secNo = section.getAttribute('data-nav');
    let li = document.createElement('li');
    let atag = document.createElement('a');
    atag.textContent = secNo;
    li.addEventListener('click', () => {
        window.scrollTo({ top: section.getBoundingClientRect().top + window.pageYOffset + (-55), behavior: 'smooth' });
    });
    li.appendChild(atag);
    atag.classList.add('menu__link');
    atag.setAttribute('style', 'float: left;');
    Container.appendChild(li);
});
//Step 1-b
/*I honestly asked for help in this part and two otheres, hope that doesn't cause problems since i got it explained to me then i excuted it i even helped that friend a little , and a big thanks to that great community , to have alot of questions and answers so focused on one topic in one place was sooo helpful 
so basically to get the numbering of each section right we will put a counter in an expandable array and the numbering of the sections will be in order.
then i will try to target the viewed section by height and measures since in order to make it active while deactivating the others i have to differentiate between them well */
let secelements = document.querySelectorAll('nav ul li');
let counter = 0;
secelements.forEach(li => {

    let numarr = arr[counter].getAttribute('id');
    if (counter === 0) {
        li.classList.add(numarr);
        counter++;
    } else {
        li.classList.add(numarr);
        counter++;
    }
});
/*In thsi part we are targeting the viewed section in order to make it active while deactivating the others , then making the current section stay active in the sticky navbar instead of it going back to color white.
TBH, coming up with the equation was so hard for me and i managed to find and undertstand this mechanism in a tutorial online */
window.addEventListener('scroll', () => {
    let viewsec = '';
    sections.forEach(section => {

        const sectionstart = section.offsetTop;
        const sectionlegnth = section.clientHeight;
        if (pageYOffset >= (sectionstart - sectionlegnth)) {
            viewsec = section.getAttribute('id');
        }

    })
    secelements.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(viewsec)) {
            li.classList.add('active');
        }
    })
});
/*i used the help of a friend but both of us did it wrong even the tutorials online didnt do it for us then the webinar made it easier and we nailed it without copying the webinars code or each other's or even copying , but alot of explaining and tutorials were needed.*/
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let secPos = section.getBoundingClientRect();
        if (secPos.top > 0 && secPos.top < 400) {
            if (!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class')
            }
        } else {
            section.classList.remove('your-active-class')
        }
    })
});