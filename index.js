import { franc } from 'franc';
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2];
const langCode = franc(input)
if(langCode === 'und'){
    console.log("Sorry,Cound't Figure it out!Try With More Sample Text")
}else{
    const language = langs.where('3',langCode)
    console.log(`Out Best Guess,It is:,${language.name}`.black)
}

