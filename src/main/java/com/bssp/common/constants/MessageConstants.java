package com.bssp.common.constants;

/**
 * 项目名称：bssp-auth-web
 * 类名称：MessageConstants
 * 类描述：返回状态信息
 * 创建人：willchen
 * 创建时间：2017/5/4
 * 修改人：willchen
 * 修改时间：2017/5/4
 */
public enum MessageConstants {
    BSSP_STATUS_FAIL(0,"失败"),
    BSSP_STATUS_SUCCESS(1,"成功"),
    BSSP_STATUS_VERIFY_WRONG(2,"验证码错误"),
    BSSP_STATUS_USER_NOTEXIST(3,"该账号不存在"),
    BSSP_STATUS_USER_DISABLE(4,"该账号已被冻结"),
    BSSP_STATUS_USER_PASSWORD(5,"密码错误"),
    BSSP_STATUS_MENU_REDUPLICATED(6,"该菜单名已被使用"),
    BSSP_STATUS_MENU_CREATE_SUCCESS(7,"菜单创建成功"),
    BSSP_STATUS_MENU_UPDATE_SUCCESS(8,"菜单修改成功"),
    BSSP_STATUS_EMAIL_INPUT_ERROR(9,"请输入正确的电子邮箱"),
    BSSP_STATUS_PHONE_INPUT_ERROR(10,"请输入正确的手机号码"),
    BSSP_STATUS_USER_REDUPLICATED(11,"该用户名已被使用"),
    BSSP_STATUS_USER_CREATE_SUCCESS(12,"用户创建成功"),
    BSSP_STATUS_USER_UPDATE_SUCCESS(13,"用户信息修改成功"),
    BSSP_STATUS_USER_OVERTIME(14,"您未登录或者登录已超时,请先登录!"),
    BSSP_STATUS_PASSWORD_EXIST_ERROR(15,"原密码不正确"),
    BSSP_STATUS_PASSWORD_INPUT_ERROR(16,"密码长度8~16位，其中数字，字母和符号至少包含两种!"),
    BSSP_STATUS_PASSWORD_UPDATE_ERROR(17,"两次输入的新密码不一致"),
    BSSP_STATUS_PASSWORD_UPDATE_SUCCESS(18,"密码修改成功"),
    BSSP_STATUS_IMAGE_FILE_ERROR(19,"不支持的文件类型，仅支持图片!"),
    BSSP_STATUS_IMAGE_UPDATE_SUCCESS(20,"上传成功!"),
    BSSP_STATUS_IMAGE_UPDATE_FAIL(21,"上传失败!"),
    BSSP_STATUS_ROLE_CREATE_SUCCESS(22,"角色创建成功!"),
    BSSP_STATUS_ROLE_UPDATE_SUCCESS(23,"角色修改成功!"),
    BSSP_STATUS_ROLE_DELETE_SUCCESS(24,"角色删除成功!"),
    BSSP_STATUS_ROLE_DELETE_CHOOSE(25,"请选择要删除的角色!"),
    BSSP_STATUS_VERIFY_INPUT_ERROR(26,"请输入正确的验证码!"),
    BSSP_STATUS_VERIFY_OVERTIME(27,"验证码已过期,请重新输入验证码!"),
    BSSP_STATUS_INTERFACE_JURISDICTION(28,"没有此接口的权限"),
    BSSP_STATUS_UNKOWN(-1,"未知错误,请联系管理员!");

    private Integer code;
    private String message;

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    MessageConstants(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
