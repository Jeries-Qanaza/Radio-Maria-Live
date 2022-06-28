import AllPrograms from "../allPrograms.js";

const sunday = (time) => 
{
    let obj

    if(time>=0&&time<1)
    {
        obj=  AllPrograms.find(x => x.progName == "تبشير ملائكي + مسبحة")
    }
    else if(time>=1&&time<1.30)
    {
        obj=  AllPrograms.find(x => x.progName == "تعبدات روحية")
    }
    else if(time>=1.30&&time<2.30)
    {
        obj=  AllPrograms.find(x => x.progName == "كلمة حياة")
    }
    else if(time>=2.30&&time<3)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقة تراتيل")
    }
    else if(time>=3&&time<3.30)
    {
        obj=  AllPrograms.find(x => x.progName == "مسبحة الرحمة")
    }
    else if(time>=3.30&&time<4)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقات اختياريه او تراتيل 2")
    }
    else if(time>=4&&time<4.30)
    {
        obj=  AllPrograms.find(x => x.progName == "كلمة الراعي")
    }
    else if(time>=4.30&&time<5)
    {
        obj=  AllPrograms.find(x => x.progName == "نقطة حب")
    }
    else if(time>=5&&time<5.30)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقة تراتيل")
    }
    else if(time>=5.30&&time<6)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقات اختياريه او تراتيل 1")
    }
    else if(time>=6&&time<7)
    {
        obj=  AllPrograms.find(x => x.progName == "تراث وتطلعات")
    }
    else if(time>=7&&time<8)
    {
        obj=  AllPrograms.find(x => x.progName == "المسبحة اسرار المجد")
    }
    else if(time>=8&&time<8.30)
    {
        obj=  AllPrograms.find(x => x.progName == "اخبار الكنيسة")
    }
    else if(time>=8.30&&time<9)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقة تراتيل")
    }
    else if(time>=9&&time<9.30)
    {
        obj=  AllPrograms.find(x => x.progName == "تأملات روحية")
    }
    else if(time>=9.30&&time<10)
    {
        obj=  AllPrograms.find(x => x.progName == "ليتورجية مارونية")
    }
    else if(time>=10&&time<11)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقات اختياريه او تراتيل 2")
    }
    else if(time>=11&&time<12)
    {
        obj=  AllPrograms.find(x => x.progName == "القداس الالهي")
    }
    else if(time>=12&&time<12.30)
    {
        obj=  AllPrograms.find(x => x.progName == "تبشير ملائكي + مسبحة")
    }
    else if(time>=12.30&&time<13)
    {
        obj=  AllPrograms.find(x => x.progName == "سنكسار اسبوعي")
    }
    else if(time>=13&&time<13.30)
    {
        obj=  AllPrograms.find(x => x.progName == "قصة قصيرة")
    }
    else if(time>=13.30&&time<14)
    {
        obj=  AllPrograms.find(x => x.progName == "تأملات روحية")
    }
    else if(time>=14&&time<15)
    {
        obj=  AllPrograms.find(x => x.progName == "تعليم اباء روحيين")
    }
    else if(time>=15&&time<15.30)
    {
        obj=  AllPrograms.find(x => x.progName == "مسبحة الرحمة")
    }
    else if(time>=15.30&&time<16)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقات اختياريه او تراتيل 1")
    }
    else if(time>=16&&time<17)
    {
        obj=  AllPrograms.find(x => x.progName == "تراث وتطلعات")
    }
    else if(time>=17&&time<17.30)
    {
        obj=  AllPrograms.find(x => x.progName == "ليتورجيه بيزنطية")
    }
    else if(time>=17.30&&time<18)
    {
        obj=  AllPrograms.find(x => x.progName == "فصل من الكتاب")
    }
    else if(time>=18&&time<19)
    {
        obj=  AllPrograms.find(x => x.progName == "اسرار المجد")
    }
    else if(time>=19&&time<19.30)
    {
        obj=  AllPrograms.find(x => x.progName == "صلاة المساء")
    }
    else if(time>=19.30&&time<20)
    {
        obj=  AllPrograms.find(x => x.progName == "عظة روحية")
    }
    else if(time>=20&&time<20.30)
    {
        obj=  AllPrograms.find(x => x.progName == "اخبار الكنيسة")
    }
    else if(time>=20.30&&time<21)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقة تراتيل")
    }
    else if(time>=21&&time<21.30)
    {
        obj=  AllPrograms.find(x => x.progName == "ليتورجية مارونية")
    }
    else if(time>=21.30&&time<22)
    {
        obj=  AllPrograms.find(x => x.progName == "صوت الكنيسة اوديينسا")
    }
    else if(time>=22&&time<22.30)
    {
        obj=  AllPrograms.find(x => x.progName == "صلاة قبل النوم")
    }
    else if(time>=22.30&&time<23)
    {
        obj=  AllPrograms.find(x => x.progName == "كلمة الراعي")
    }
    else if(time>=23&&time<23.30)
    {
        obj=  AllPrograms.find(x => x.progName == "صلوات متنوعة")
    }
    else if(time>=23.30&&time<24)
    {
        obj=  AllPrograms.find(x => x.progName == "حلقة تراتيل")
    }
    else
    {
        obj=AllPrograms.find(x => x.progName == "حلقة تراتيل")
    }

    document.getElementById("showName").innerHTML=obj.progName
    document.getElementById("showImage").src=obj.progImg
}
export default sunday;
