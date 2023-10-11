const style = `

.dumi-default-hero-title {
  font-size:120px !important;
}
.dumi-default-hero-title > span {
  background:linear-gradient(30deg, red 20%, #ca0c2b)  !important;
  text-shadow: 0 10px 20px rgba(216, 34, 52, 0.2) !important;
  
  -webkit-background-clip: text !important;
}
.dumi-default-hero-actions > a:first-child{
  background-color:#f51114 !important;
}

.dumi-default-logo {
  font-size:26px !important;
}
a.dumi-default-logo:hover {
   color:black !important;
}
.dumi-default-logo > img {
  height:33px !important;
}
.dumi-default-sidebar{
  width:220px !important;
}
.dumi-default-doc-layout-toc-wrapper{
  width:150px !important;
}
.dumi-default-content:not([data-no-sidebar]) {
  background-color: #fdfdfd !important;
}
a.active{
  color:#d72e21 !important;
}
dd > a:hover{
   color:red !important;
}
.dumi-default-navbar >li > a:hover{
   color:red !important;
}
.dumi-default-hero-actions > a:hover{
   color:#fff !important;
}
`

export default style
