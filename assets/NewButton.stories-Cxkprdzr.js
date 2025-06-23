import{j as _}from"./jsx-runtime-D_zvdyIk.js";const g="_button_1ycqd_1",f="_primary_1ycqd_8",b="_secondary_1ycqd_12",v="_sm_1ycqd_16",x="_md_1ycqd_20",q="_lg_1ycqd_24",t={button:g,primary:f,secondary:b,sm:v,md:x,lg:q},m=({children:i,onClick:l,variant:p="primary",size:u="md"})=>{const y=`${t.button} ${t[p]} ${t[u]}`;return _.jsx("button",{className:y,onClick:l,children:i})};m.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,S={component:m,tags:["autodocs"],argTypes:{variant:{options:["primary","secondary"],control:{type:"select"}},size:{options:["sm","md","lg"],control:{type:"select"}}},args:{onClick:T(),variant:"primary",size:"md",children:"Click Me"}},r={args:{buttonText:"Hello",variant:"primary",size:"md"}},e={args:{buttonText:"Hello",variant:"secondary",size:"md"}};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "md"
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello",
    variant: "secondary",
    size: "md"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["Primary","Secondary"];export{r as Primary,e as Secondary,O as __namedExportsOrder,S as default};
