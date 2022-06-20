import './styles/main.scss'
import example from './images/example.png'

class Game {
    name = 'hei hei hei hei'
}

const myGame = new Game()

const img = document.createElement('img')
img.src = example

const p = document.createElement('p')
p.textContent = `I like ${myGame.name}`

const heading = document.createElement('h1');
heading.textContent = 'Interesting!'

const app = document.querySelector('#root');
// app.appendChild(heading)
app.append(heading, p, img)