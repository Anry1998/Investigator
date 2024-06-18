import './StatementPrint.scss'

import React, {FC, useContext, useState, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";

interface PropsType {
    applicants: any;
  }

let StatementPrint = () => {

    const {personalinformation} = useContext(Context)

    const [applicantLastName, setApplicantLastName] = useState<string>(personalinformation.userApplicant.lastName)
    const [applicantName, setApplicantName] = useState<string>(personalinformation.userApplicant.name)
    const [applicantPatronymic, setApplicantPatronymic] = useState<string>(personalinformation.userApplicant.patronymic)
    
    const s = () => {
        window.print()
    }

    return(
        <div className='statement'>
            <div className='statement__top'>
                <div>ПРОТОКОЛ</div>
                <div>принятия устного заявления</div>
            </div>
            
            <div className='statement__time_place'>
                <div>г. Анапа</div>
                <div> 21 марта 2024 г.</div>
            </div>

            <div className='statement__cap'>
                <div>Я, следователь следственного отдела отдела МВД России по городу Анапе </div>
                <div>старший лейтенант юстиции А.Д. Бритвин</div>
                <div>в соответствии со ст.141 УПК РФ в помещении каб. № 59 СО ОМВД России по г. Анапе</div>
                <div>принял устное заявление от {applicantLastName} {applicantName} {applicantPatronymic}  Арефьевой Натальи Николаевны, 19.07.1978 года рождения,</div>
                <div>проживающей по адресу: г. Анапа, ш. Супсехское, д. 39, к. 11, кв. 121</div>
                <div>паспорт гражданина РФ серия 0323 № 687176,</div>
                
                <div>ГУ МВД России по Краснодарскому краю 17.10.2023. </div>
                
            </div>

            <div className='statement__responsibility'>
                <div>Об ответственности за заведомо ложный донос по ст.306 УК РФ предупрежден(а)</div>
            </div>
            <div className='statement__content'>
                <div>В заявлении  сообщил следующее:</div>
                <div contentEditable="true">
                    {/* contenteditable="true" */}
                    Прошу Вас привлечь к уголовной ответственности неустановленное лицо, которое в период времени с 
                    02 марта 2024 года по 16 часов 00 минут 19 марта 2023 года, находясь на первом этаже в подъезде 
                    домовладения, расположенного по адресу: г. Анапа, ш. Супсехское,д. 39, к. 11,тайно похитило велосипед 
                    марки «RICHIESTO ALLENATORE 24D», стоимостью 16 118 рублей, принадлежащий  Арефьевой Н.Н., 
                    в результате чего последней был причинен ущерб в значительном размере на указанную сумму. 
                </div>
            </div>
            <div>
                <div>Протокол прочитан: лично</div>
                <div>Заявление с моих слов записано: правильно</div>
                <div>Замечания к протоколу: нет</div>
            </div>
            <div>
                <div>подпись заявителя                  ___________</div>
                <div>подпись лица, принявшего заявление ___________</div>
            </div>
        


            
            <button 
                onClick={s}
                id="button__print"
                className="button__print"
            >Печать</button>
        </div>
    )
}

export default observer(StatementPrint)