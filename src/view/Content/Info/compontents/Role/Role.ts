import { ref, onMounted, onUnmounted,reactive } from 'vue'
import { Actor } from "@/libs/Actor"
import { Info } from '../../Info'

interface roleList{
    id:string,
    name:string
}
class Role extends Actor {
    constructor(parent: Info | null = null) {
        super()
        this.parent = parent
    }

    private parent: Info | null = null

    public  data = reactive({
        form: {},
        roleForm: {},
        orgForm: {},
        queryParams: {
            pageNum: 1,
            pageSize: 10,
            nickName: undefined,
            roleId: undefined,
            companyId: undefined,
            deptId: undefined
        },
        dateRange: [],
        rules: {
            nickName: [
                { required: true, message: "人员名称不能为空", trigger: "blur" }
            ],
            userName: [
                { required: true, message: "人员账号不能为空", trigger: "blur" }
            ],
            phonenumber: [
                { required: false, message: "", trigger: "blur" },
                {
                    pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
                    message: "请输入正确的手机号码",
                    trigger: "blur"
                }
            ],
            password: [
                { required: true, trigger: "blur", message: "请输入您的密码" },
                { min: 6, max: 15, message: "用户密码长度必须介于 6 和 15 之间", trigger: "blur" },
                {
                    validator: (rule:any, value:any, callback:any) => {
                        // if (!validPwd(value)) {
                        //     callback('密码只能是数字、字母或特殊符号')
                        // } else {
                        //     callback()
                        // }
                    }, trigger: 'blur'
                }
            ],
            roleId: [
                { required: true, message: "角色不能为空", trigger: "change" }
            ],
        },
        roleRules: {
            deptName: [
                { required: true, message: "行动小组名称不能为空", trigger: "blur" }
            ]
        }
    });

    public roleList=ref<Array<roleList>>([{id:'',name:''}])

    public roleTitle=ref<boolean>(false)

    public roleOpen=ref<boolean>(false)

    public limitData=ref([])

    public limitType=ref<boolean>(false)

    public InitStates() {
        return {
            data:this.data,
            roleList: this.roleList,
            roleTitle: this.roleTitle,
            roleOpen: this.roleOpen,
            limitData: this.limitData,
            limitType: this.limitType,

        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    public Destroy() {

    }

    public addRole(){

    }

    public roleLimit(id:string){
        
    }
}

export { Role }