import LoginPage from "./pages/1.LoginPage/LoginPage"
import RegistrationPage from "./pages/2.RegistrationPage/RegistrationPage"
import ResetPassPage from "./pages/3.ResetPassPage/ResetPassPage"
import InformationPage from "./pages/4.InformationPage/InformationPage"
import Statement from "./pages/StatementPage/Statement"
import StatementFraud from "./pages/StatementPage/StatementFraud/StatementFraud"
import StatementTheft from "./pages/StatementPage/StatementTheft/StatementTheft"
import InvestigatorPage from "./pages/InvestigatorPage/InvestigatorPage"

import { 
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE , 
    RESET_ROUTE, 
    INFORMATION_ROUTE, 
    STATEMENT_ROUTE, 
    THEFT_ROUTE, 
    FRAUD_ROUTE, 
    INVESTIGATOR_ROUTE  
} from "./utils/consts"


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage 
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    },
    {
        path: RESET_ROUTE,
        Component: ResetPassPage
    }
]

export const authRoutes = [
    {
        path: INFORMATION_ROUTE,
        Component: InformationPage 
    },
    {
        path: STATEMENT_ROUTE,
        Component: Statement
    },
    {
        path: FRAUD_ROUTE,
        Component: StatementFraud
    },
    {
        path: THEFT_ROUTE,
        Component: StatementTheft
    }
]


export const adminRoutes = [
    {
        path: INVESTIGATOR_ROUTE,
        Component: InvestigatorPage
    }
    
]