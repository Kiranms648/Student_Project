import { LightningElement, api} from 'lwc';

export default class StudentTile extends LightningElement {
   
    @api selectedStudentId = '';

    @api student = 
    {
        Name: '[KIRAN]',
        PhotoUrl: 'https://th.bing.com/th/id/OIP.1MKAnAwUC4oXO-195Hi7bAAAAA?pid=ImgDet&w=189&h=189&c=7&dpr=1.5',
    };

    @api isSelected = false;

    studentClick()
    {
        // alert(this.student.Name);
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: { studentId: this.student.Id }
        });
        this.dispatchEvent(evt);
    }

    get tileSelected() 
    {
        return (this.selectedStudentId===this.student.Id) ? "tileselected" : "tile";
    }

}