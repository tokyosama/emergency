import { ElMessageBox, ElMessage } from 'element-plus'
import { ref } from 'vue'

class MessageBox {
    static Confirm(title: string, success = () => { }, cancel = (a: any) => { }) {
        ElMessageBox.confirm(
            title,
            '提示',
            {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                distinguishCancelAndClose: true,
                type: 'warning',
                closeOnClickModal: false,
                showClose: true,
                closeOnPressEscape: false,
            }
        ).then(() => {
            success()
        }).catch(action => {
            cancel(action)
        })
    }
}
export { MessageBox }