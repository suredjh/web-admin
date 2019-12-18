<template>
    <div class="fcenter user">
        <div class="header">
            <!-- <el-avatar :size="50" :src="circleUrl"></el-avatar> -->
        </div>
        <div class="role-name">xiaoming</div>
        <div class="fcenter ops-icon">
            <img :src="pImg" alt="" />
        </div>
        <div class="ops-btn">修改密码</div>
        <div class="fcenter ops-icon">
            <img :src="bImg" alt="" />
        </div>
        <div class="ops-btn">退出</div>
    </div>
</template>
<script>
import pImg from '@/assets/icons/icon-9.png';
import bImg from '@/assets/icons/icon-10.png';
export default {
    data () {
        return {
            pImg,
            bImg,
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        }
    }
}
</script>
<style lang="scss" scoped>
    .user {
        flex: 1;
        justify-content: flex-end;
        cursor: pointer;
    }
    .header {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background: #ffffff;
        margin-right: 20px;
    }
    .ops-btn {
        padding-right: 35px;
    }
    .role-name {
        padding-right: 46px;
    }
    .ops-icon {
        width: 20px;
        height: 20px;
        margin-right: 17px;
        // background-color: #fff;
    }

</style>