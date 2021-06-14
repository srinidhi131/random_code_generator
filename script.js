const quotes = [{
  "quote": "\"Be yourself; everyone else is already taken.\"",
  "author": "- Oscar Wilde" },

{
  "quote": "\"I have nothing to declare except my genius.\"",
  "author": "- Oscar Wilde" },

{
  "quote": "\"True friends stab you in the front.\"",
  "author": "- Oscar Wilde" },

{
  "quote": "\"Women are made to be Loved, not understood.\"",
  "author": "- Oscar Wilde" },

{
  "quote": "\"Be the change that you wish to see in the world.\"",
  "author": "- Mahatma Gandhi" },

{
  "quote": "\"An eye for eye only ends up making the whole world blind.\"",
  "author": "- Mahatma Gandhi" },

{
  "quote": "\"No one can make you feel inferior without your consent.\"",
  "author": "- Eleanor Roosevelt" },

{
  "quote": "\"Great minds discuss ideas; average minds discuss events; small minds discuss people.\"",
  "author": "- Eleanor Roosevelt" },

{
  "quote": "\"It takes as much energy to wish as it does to plan.\"",
  "author": "- Eleanor Roosevelt" },

{
  "quote": "\"Do one thing every day that scares you.\"",
  "author": "- Eleanor Roosevelt" },

{
  "quote": "\"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.\"",
  "author": "- Martin Luther King" },

{
  "quote": "\"Our lives begin to end the day we become silent about things that matter.\"",
  "author": "- Martin Luther King" },

{
  "quote": "\"Injustice anywhere is a threat to justice everywhere.\"",
  "author": "- Martin Luther King" },

{
  "quote": "\"The time is always right to do what is right.\"",
  "author": "- Martin Luther King" }];

const color = ['#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857'];
newQuote();
function newQuote() {
  var index = [Math.floor(Math.random() * quotes.length)];
  var colorIndex = Math.floor(Math.random() * quotes.length);
  document.body.style.background = color[colorIndex];
  document.getElementById("text").style.color = color[colorIndex];
  document.getElementById("author").style.color = color[colorIndex];
  document.getElementById("text").innerHTML = quotes[index].quote;
  document.getElementById("author").innerHTML = quotes[index].author;
  document.getElementById("tweet").style.background = color[colorIndex];
  document.getElementById("new-quote").style.background = color[colorIndex];
}