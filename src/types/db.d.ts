export interface AclPasswordResetToken {
  /**
   * ID|number
   */
  id: number;
  /**
   * Email|text
   */
  email: string;
  /**
   * Token|text
   */
  token: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface AclPermission {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên|text
   */
  name: string;
  /**
   * Tên hiển thị|text
   */
  display_name: string;
  /**
   * Tên bảo vệ|text
   */
  guard_name: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface AclRoleHasPermission {
  /**
   * ID|number
   */
  id: number;
  /**
   * Thuộc vai trò nào?|select[id,display_name]
   */
  role_id: string;
  /**
   * Thuộc quyền nào?|select[id,display_name]
   */
  permission_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface AclRole {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên|text
   */
  name: string;
  /**
   * Tên hiển thị|text
   */
  display_name: string;
  /**
   * Tên bảo vệ|text
   */
  guard_name: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface AclUserHasPermission {
  /**
   * ID|number
   */
  id: number;
  /**
   * Thuộc người dùng nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc quyền nào?|select[id,display_name]
   */
  permission_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface AclUserHasRole {
  /**
   * ID|number
   */
  id: number;
  /**
   * Thuộc người dùng nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc vai trò nào?|select[id,display_name]
   */
  role_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface AclUser {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên tài khoản|text
   */
  username: string;
  /**
   * Mật khẩu|password
   */
  password: string;
  /**
   * Họ và chữ lót|text
   */
  last_name?: string | null;
  /**
   * Tên|text
   */
  first_name?: string | null;
  /**
   * Họ tên|text
   */
  full_name?: string | null;
  /**
   * Giới tính|enum_number|#1: nam; #2: nữ
   */
  gender?: "1" | "2" | null;
  /**
   * Email|text
   */
  email: string;
  /**
   * Ngày sinh|date
   */
  birthday?: string | null;
  /**
   * Ảnh đại diện|image
   */
  avatar?: string | null;
  /**
   * Mã số|text
   */
  code?: string | null;
  /**
   * Chức danh|text
   */
  job_title?: string | null;
  /**
   * Phòng ban|text
   */
  department?: string | null;
  /**
   * Điện thoại|text
   */
  phone?: string | null;
  /**
   * Địa chỉ|textarea
   */
  address1?: string | null;
  /**
   * Địa chỉ 2|textarea
   */
  address2?: string | null;
  /**
   * Thành phố|text
   */
  city?: string | null;
  /**
   * Tiểu bang|text
   */
  state?: string | null;
  /**
   * Mã bưu chính|text
   */
  postal_code?: string | null;
  /**
   * Quốc gia|text
   */
  country?: string | null;
  /**
   * Giới thiệu bản thân|textarea
   */
  introduce?: string | null;
  /**
   * Mã ghi nhớ đăng nhập|text
   */
  remember_token?: string | null;
  /**
   * Mã kích hoạt|text
   */
  active_code?: string | null;
  /**
   * Trạng thái|enum|#new: mới đăng ký; #activated: đã kích hoạt; #locked: đã khóa
   */
  status: "new" | "activated" | "locked";
  /**
   * Thời gian khóa|datetime
   */
  locked_at?: string | null;
  /**
   * Nhà cung cấp|text
   */
  provider?: string | null;
  /**
   * Nhà cung cấp ID|text
   */
  provider_id?: string | null;
  /**
   * Skype|text
   */
  skype?: string | null;
  /**
   * Zalo|text
   */
  zalo?: string | null;
  /**
   * Facebook|text
   */
  facebook?: string | null;
  /**
   * Tiktok|text
   */
  tiktok?: string | null;
  /**
   * Youtube|text
   */
  youtube?: string | null;
  /**
   * Instagram|text
   */
  instagram?: string | null;
  /**
   * Twitter|text
   */
  twitter?: string | null;
  /**
   * Website|text
   */
  website?: string | null;
  /**
   * Bio|text
   */
  bio?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc người quản lý nào?|select[id,full_name]
   */
  manager_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CalendarCalendarDetail {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tiêu đề|text
   */
  title: string;
  /**
   * Nội dung|textarea
   */
  body?: string | null;
  /**
   * Địa điểm|textarea
   */
  location?: string | null;
  /**
   * Chuyên mục|text
   */
  category: string;
  /**
   * Chuyên mục|text
   */
  dueDateClass: string;
  /**
   * Từ ngày|datetime
   */
  start?: string | null;
  /**
   * Đến ngày|datetime
   */
  end?: string | null;
  /**
   * Màu chữ|color
   */
  color: string;
  /**
   * Màu nền|color
   */
  bgColor: string;
  /**
   * Màu khung|color
   */
  borderColor: string;
  /**
   * Màu khi kéo|color
   */
  dragBgColor: string;
  /**
   * Chỉ xem|checkbox
   */
  isReadOnly: string;
  /**
   * Thuộc calendar nào?|select[id,name]
   */
  calendar_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CalendarCalendar {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên|text
   */
  name: string;
  /**
   * Tiêu đề|text
   */
  title: string;
  /**
   * Chọn|checkbox
   */
  checked: string;
  /**
   * Màu chữ|color
   */
  color: string;
  /**
   * Màu nền|color
   */
  bgColor: string;
  /**
   * Màu khung|color
   */
  borderColor: string;
  /**
   * Màu khi kéo|color
   */
  dragBgColor: string;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CmsPageCategory {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  category_slug: string;
  /**
   * Tiêu đề|text
   */
  category_title: string;
  /**
   * Nội dung|textarea
   */
  category_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  category_excerpt?: string | null;
  /**
   * Ảnh minh họa|image
   */
  category_image?: string | null;
  /**
   * Lượt xem|number
   */
  category_view_count?: number | null;
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CmsPage {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  page_slug: string;
  /**
   * Tiêu đề|text
   */
  page_title: string;
  /**
   * Nội dung|textarea
   */
  page_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  page_excerpt?: string | null;
  /**
   * Thể loại|enum|#page: trang
   */
  page_type: "page";
  /**
   * Trạng thái|enum|#draft: bản nháp; #publish: xuất bản; #feature: nổi bật; #pending: đang chờ phê duyệt; #private: riêng tư; #trash: thùng rác; #auto-draft: bản nháp tự động
   */
  page_status:
    | "draft"
    | "publish"
    | "feature"
    | "pending"
    | "private"
    | "trash"
    | "auto_draft";
  /**
   * Ảnh minh họa|image
   */
  page_image?: string | null;
  /**
   * Lượt xem|number
   */
  page_view_count?: number | null;
  /**
   * Số phút đọc|number
   */
  page_read_total_minutes?: number | null;
  /**
   * Lần truy cập gần nhất|datetime
   */
  page_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?|select[id,category_title]
   */
  page_category_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CmsPostCategory {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  category_slug: string;
  /**
   * Tiêu đề|text
   */
  category_title: string;
  /**
   * Nội dung|textarea
   */
  category_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  category_excerpt?: string | null;
  /**
   * Ảnh minh họa|image
   */
  category_image?: string | null;
  /**
   * Lượt xem|number
   */
  category_view_count?: number | null;
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CmsPost {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  post_slug: string;
  /**
   * Tiêu đề|text
   */
  post_title: string;
  /**
   * Nội dung|textarea
   */
  post_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  post_excerpt?: string | null;
  /**
   * Thể loại|enum|#post: bài viết
   */
  post_type: "post";
  /**
   * Trạng thái|enum|#draft: bản nháp; #publish: xuất bản; #feature: nổi bật; #pending: đang chờ phê duyệt; #private: riêng tư; #trash: thùng rác; #auto-draft: bản nháp tự động
   */
  post_status:
    | "draft"
    | "publish"
    | "feature"
    | "pending"
    | "private"
    | "trash"
    | "auto_draft";
  /**
   * Ảnh minh họa|image
   */
  post_image?: string | null;
  /**
   * Lượt xem|number
   */
  post_view_count?: number | null;
  /**
   * Mật khẩu|password
   */
  post_password?: string | null;
  /**
   * Số phút đọc|number
   */
  post_read_total_minutes?: number | null;
  /**
   * Đánh giá|number
   */
  post_rating_count?: number | null;
  /**
   * Lần truy cập gần nhất|datetime
   */
  post_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?|select[id,category_title]
   */
  post_category_id: string;
  /**
   * Hình đại diện|Thuộc tập tin media nào?
   */
  post_image_media_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreFeedbackCategory {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  category_code: string;
  /**
   * Slug|text
   */
  category_slug: string;
  /**
   * Tiêu đề|text
   */
  category_title: string;
  /**
   * Nội dung|textarea
   */
  category_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  category_excerpt?: string | null;
  /**
   * Ảnh minh họa|image
   */
  category_image?: string | null;
  /**
   * Trạng thái|enum|#active: đang sử dụng; #inactive: ngưng sử dụng
   */
  category_status: "active" | "inactive";
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreFeedback {
  /**
   * ID|number
   */
  id: number;
  /**
   * Họ tên|text
   */
  fullname: string;
  /**
   * Email|text
   */
  email: string;
  /**
   * Điện thoại|text
   */
  phone: string;
  /**
   * Trạng thái|enum|#very_bad: rất tệ; #bad: tệ; #normal: bình thường; #good: tốt; #very_good: rất tốt
   */
  feeling_status: "very_bad" | "bad" | "normal" | "good" | "very_good";
  /**
   * Nội dung|textarea
   */
  content: string;
  /**
   * Thuộc chuyên mục nào?|select[id,category_title]
   */
  feedback_category_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreFormSubmission {
  /**
   * ID|number
   */
  id: number;
  /**
   * Cấu trúc form dạng JSON|json
   */
  data: string;
  /**
   * Gởi bởi IP|text
   */
  submitted_by_ip?: string | null;
  /**
   * Form nào?|select[id,form_name]
   */
  form_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreForm {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  form_code: string;
  /**
   * Tên|text
   */
  form_name: string;
  /**
   * Mô tả|textarea
   */
  form_description?: string | null;
  /**
   * Cấu trúc form dạng JSON|json
   */
  form_template_data: string;
  /**
   * Trạng thái|boolean
   */
  form_is_active: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreMedia {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên file media|text
   */
  media_name?: string | null;
  /**
   * Slug file media|text
   */
  media_slug?: string | null;
  /**
   * Tiêu đề file media|text
   */
  media_title?: string | null;
  /**
   * Đường dẫn file media|image
   */
  media_path?: string | null;
  /**
   * Loại file media (image, video, audio, pdf, etc)|enum
   */
  media_mime_type?: null;
  /**
   * Trạng thái media|enum|#active:hoạt động;#trash:đã xóa
   */
  media_status?: "active" | "trash" | null;
  /**
   * Kích thước file media|number
   */
  media_file_size?: number | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreMenuItem {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã menu item
   */
  menu_code?: string | null;
  /**
   * Slug menu item
   */
  menu_slug?: string | null;
  /**
   * Tên menu item
   */
  menu_name?: string | null;
  /**
   * Loại menu item|enum|#function: menu gắn với chức năng; #url: menu gắn với đường dẫn; #course: menu gắn với khóa học; #user: menu gắn với người dùng; #route: menu gắn với route; #group: menu dạng group; #header: menu dạng header; #custom: menu tùy chỉnh
   */
  menu_type?:
    | "function"
    | "url"
    | "course"
    | "user"
    | "route"
    | "group"
    | "header"
    | "custom"
    | null;
  /**
   * Đường dẫn|URL|text
   */
  menu_url?: string | null;
  /**
   * Biểu tượng|text
   */
  menu_icon?: string | null;
  /**
   * Thứ tự|number
   */
  menu_order?: number | null;
  /**
   * Mô tả|textarea
   */
  menu_description?: string | null;
  /**
   * Trạng thái|boolean
   */
  menu_is_active?: string | null;
  /**
   * Mở cửa sổ mới|enum|#_blank: mở cửa sổ mới; #_self: mở cửa sổ hiện tại
   */
  menu_target?: "_blank" | "_self" | null;
  /**
   * Class cho badge|text
   */
  menu_badge_class?: string | null;
  /**
   * Nội dung cho badge|text
   */
  menu_badge_text?: string | null;
  /**
   * Đường dẫn cha|URL|text
   */
  parent_path?: string | null;
  /**
   * Menu cha|select[id,menu_name]
   */
  parent_id?: string | null;
  /**
   * Menu nào?|select[id,menu_name]
   */
  menu_id?: string | null;
  /**
   * Quyền nào?|select[id,permission_name]
   */
  permission_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreMenu {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  menu_code: string;
  /**
   * Tên|text
   */
  menu_name: string;
  /**
   * Slug|text
   */
  menu_slug: string;
  /**
   * Vị trí hiển thị|enum|#frontend: menu hiển thị frontend; #backend: menu hiển thị backend; #frontend_footer1: menu hiển thị ở frontend footer 1; #frontend_footer2: menu hiển thị ở frontend footer 2; #backend_footer1: menu hiển thị ở backend footer 1; #backend_footer2: menu hiển thị ở backend footer 2;#footer1: menu hiển thị ở footer 1; #footer2: menu hiển thị ở footer 2;
   */
  menu_position:
    | "frontend"
    | "backend"
    | "frontend_footer1"
    | "frontend_footer2"
    | "backend_footer1"
    | "backend_footer2"
    | "footer1"
    | "footer2";
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CorePlugin {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên plugin|text
   */
  name: string;
  /**
   * Tiêu đề plugin|text
   */
  title?: string | null;
  /**
   * Mô tả|text
   */
  description?: string | null;
  /**
   * Phiên bản|text
   */
  version?: string | null;
  /**
   * Tác giả|text
   */
  author?: string | null;
  /**
   * Thư mục gốc|text
   */
  root_folder_path?: string | null;
  /**
   * Bật/Tắt|boolean
   */
  enabled: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreSetting {
  /**
   * ID|number
   */
  id: number;
  /**
   * Nhóm|text
   */
  group?: string | null;
  /**
   * Tiêu đề nhóm|text
   */
  group_title?: string | null;
  /**
   * Tiêu đề|text
   */
  title?: string | null;
  /**
   * Khóa|text
   */
  key: string;
  /**
   * Giá trị|text
   */
  value?: string | null;
  /**
   * Diễn giải|text
   */
  description?: string | null;
  /**
   * Loại control|enum|#text:kiểu control text;#textarea:kiểu control textarea;#number:kiểu control number;#currency:kiểu control currency;#enum:kiểu control enum;#enum_number:ENUM_NUMBER;#image:kiểu control image;#password:kiểu control password;#datetime:kiểu control datetime;#date:kiểu control date;#time:kiểu control time;#color:kiểu control color;#checkbox:kiểu control checkbox;#radio:kiểu control radio;#boolean:kiểu control boolean;#json:kiểu control json;#email:kiểu control email;
   */
  control_type:
    | "text"
    | "textarea"
    | "number"
    | "currency"
    | "enum"
    | "enum_number"
    | "image"
    | "password"
    | "datetime"
    | "date"
    | "time"
    | "color"
    | "checkbox"
    | "radio"
    | "boolean"
    | "json"
    | "email";
  /**
   * Icon|text
   */
  icon: string;
  /**
   * Tùy chọn thêm JSON|json
   */
  options_json?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreSubscribeEmail {
  /**
   * ID|number
   */
  id: number;
  /**
   * Email|text
   */
  email: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreWorkflowState {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  workflow_state_code: string;
  /**
   * Tên|text
   */
  workflow_state_name: string;
  /**
   * Mô tả|textarea
   */
  workflow_state_description?: string | null;
  /**
   * Là trạng thái bắt đầu?|boolean
   */
  workflow_state_is_start: string;
  /**
   * Là trạng thái kết thúc?|boolean
   */
  workflow_state_is_end: string;
  /**
   * Thứ tự|number
   */
  workflow_state_order: number;
  /**
   * Màu hiển thị|color
   */
  workflow_state_color: string;
  /**
   * Icon|text
   */
  workflow_state_icon: string;
  /**
   * Quy trình nào?|select[id,workflow_name]
   */
  workflow_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreWorkflowTransition {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  workflow_transition_code: string;
  /**
   * Tên|text
   */
  workflow_transition_name: string;
  /**
   * Từ trạng thái|text
   */
  workflow_transition_from_state: string;
  /**
   * Đến trạng thái|text
   */
  workflow_transition_to_state: string;
  /**
   * Quy trình nào?|select[id,workflow_name]
   */
  workflow_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface CoreWorkflow {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  workflow_code: string;
  /**
   * Tên|text
   */
  workflow_name: string;
  /**
   * Mô tả|textarea
   */
  workflow_description?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduCourseCategory {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  category_slug: string;
  /**
   * Tiêu đề|text
   */
  category_title: string;
  /**
   * Nội dung|textarea
   */
  category_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  category_excerpt?: string | null;
  /**
   * Ảnh minh họa|image
   */
  category_image?: string | null;
  /**
   * Lượt xem|number
   */
  category_view_count?: number | null;
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduCourseSectionLesson {
  /**
   * ID|number
   */
  id: number;
  /**
   * Thứ tự|number
   */
  order_number?: number | null;
  /**
   * Lượt xem|number
   */
  view_count?: number | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc phân đoạn của khóa học nào?|select[id,section_title]
   */
  section_id: string;
  /**
   * Thuộc bài học nào?|select[id,lesson_title]
   */
  lesson_id: string;
  /**
   * Thuộc khóa học nào?|select[id,course_title]
   */
  course_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduCourseSection {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  section_slug: string;
  /**
   * Tiêu đề|text
   */
  section_title: string;
  /**
   * Nội dung|textarea
   */
  section_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  section_excerpt?: string | null;
  /**
   * Thể loại|enum|#section: phân đoạn của khóa học
   */
  section_type: "section";
  /**
   * Trạng thái|enum|#draft: bản nháp; #publish: xuất bản; #feature: nổi bật; #pending: đang chờ phê duyệt; #private: riêng tư; #trash: thùng rác; #auto-draft: bản nháp tự động
   */
  section_status:
    | "draft"
    | "publish"
    | "feature"
    | "pending"
    | "private"
    | "trash"
    | "auto_draft";
  /**
   * Ảnh minh họa|image
   */
  section_image?: string | null;
  /**
   * Thứ tự|number
   */
  section_order?: number | null;
  /**
   * Lượt xem|number
   */
  section_view_count?: number | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc khóa học nào?|select[id,course_title]
   */
  course_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduCourse {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  course_slug: string;
  /**
   * Tiêu đề|text
   */
  course_title: string;
  /**
   * Nội dung|textarea
   */
  course_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  course_excerpt?: string | null;
  /**
   * Thể loại|enum|#course: khóa học
   */
  course_type: "course";
  /**
   * Trạng thái|enum|#draft: bản nháp; #publish: xuất bản; #feature: nổi bật; #pending: đang chờ phê duyệt; #private: riêng tư; #trash: thùng rác; #auto-draft: bản nháp tự động
   */
  course_status:
    | "draft"
    | "publish"
    | "feature"
    | "pending"
    | "private"
    | "trash"
    | "auto_draft";
  /**
   * Ảnh minh họa|image
   */
  course_image?: string | null;
  /**
   * Lượt xem|number
   */
  course_view_count?: number | null;
  /**
   * Đánh giá|number
   */
  course_rating_count?: number | null;
  /**
   * Mật khẩu|password
   */
  course_password?: string | null;
  /**
   * Số phút đọc|number
   */
  course_total_minutes?: number | null;
  /**
   * Lần truy cập gần nhất|datetime
   */
  course_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Là nổi bật?|boolean
   */
  is_featured?: string | null;
  /**
   * Là mới?|boolean
   */
  is_new?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?|select[id,category_title]
   */
  course_category_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduLessonCategory {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  category_slug: string;
  /**
   * Tiêu đề|text
   */
  category_title: string;
  /**
   * Nội dung|textarea
   */
  category_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  category_excerpt?: string | null;
  /**
   * Ảnh minh họa|image
   */
  category_image?: string | null;
  /**
   * Lượt xem|number
   */
  category_view_count?: number | null;
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduLessonComment {
  /**
   *
   */
  id: string;
  /**
   *
   */
  lesson_comment_content?: string | null;
  /**
   * #pending; #approved; #trash; #auto-draft
   */
  lesson_comment_status: string;
  /**
   *
   */
  parent_path?: string | null;
  /**
   * Thuộc cha nào?
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thuộc bài học nào?
   */
  lesson_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface EduLesson {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  lesson_slug: string;
  /**
   * Tiêu đề|text
   */
  lesson_title: string;
  /**
   * Nội dung|textarea
   */
  lesson_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  lesson_excerpt?: string | null;
  /**
   * Kết quả sau khi học xong bài học|textarea
   */
  lesson_result_after_learn?: string | null;
  /**
   * Yêu cầu trước khi học bài học|textarea
   */
  lesson_prerequisite_note?: string | null;
  /**
   * Kiểm tra kiến thức|textarea
   */
  lesson_recheck_knowledge?: string | null;
  /**
   * Thể loại|enum|#lp_lesson: bài học
   */
  lesson_type: "lp_lesson";
  /**
   * Trạng thái|enum|#draft: bản nháp; #publish: xuất bản; #feature: nổi bật; #pending: đang chờ phê duyệt; #private: riêng tư; #trash: thùng rác; #auto-draft: bản nháp tự động
   */
  lesson_status:
    | "draft"
    | "publish"
    | "feature"
    | "pending"
    | "private"
    | "trash"
    | "auto_draft";
  /**
   * Ảnh minh họa|image
   */
  lesson_image?: string | null;
  /**
   * Lượt xem|number
   */
  lesson_view_count?: number | null;
  /**
   * Đánh giá|number
   */
  lesson_rating_count?: number | null;
  /**
   * Mật khẩu|password
   */
  lesson_password?: string | null;
  /**
   * Số phút đọc|number
   */
  lesson_total_minutes?: number | null;
  /**
   * Lần truy cập gần nhất|datetime
   */
  lesson_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?|select[id,category_title]
   */
  lesson_category_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduSpecializationCategory {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  category_slug: string;
  /**
   * Tiêu đề|text
   */
  category_title: string;
  /**
   * Nội dung|textarea
   */
  category_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  category_excerpt?: string | null;
  /**
   * Ảnh minh họa|image
   */
  category_image?: string | null;
  /**
   * Số lượt xem|number
   */
  category_view_count?: number | null;
  /**
   * Cây thư mục|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduSpecializationCourse {
  /**
   *
   */
  id: string;
  /**
   * Thứ tự học|number
   */
  order_number?: number | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc khóa học lớn nào?|select[id,specialization_title]
   */
  specialization_id: string;
  /**
   * Thuộc khóa học nào?|select[id,course_title]
   */
  course_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduSpecialization {
  /**
   * ID|number
   */
  id: number;
  /**
   * Slug|text
   */
  specialization_slug: string;
  /**
   * Tiêu đề|text
   */
  specialization_title: string;
  /**
   * Nội dung|textarea
   */
  specialization_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  specialization_excerpt?: string | null;
  /**
   * Thể loại|enum|#specialization: khóa học lớn
   */
  specialization_type: "specialization";
  /**
   * Trạng thái|enum|#draft: bản nháp; #publish: xuất bản; #feature: nổi bật; #pending: đang chờ phê duyệt; #private: riêng tư; #trash: thùng rác; #auto-draft: bản nháp tự động
   */
  specialization_status:
    | "draft"
    | "publish"
    | "feature"
    | "pending"
    | "private"
    | "trash"
    | "auto_draft";
  /**
   * Ảnh minh họa|image
   */
  specialization_image?: string | null;
  /**
   * Số lượt xem|number
   */
  specialization_view_count?: number | null;
  /**
   * Mật khẩu|text
   */
  specialization_password?: string | null;
  /**
   * Số phút đọc|number
   */
  specialization_total_minutes?: number | null;
  /**
   * Điểm đánh giá|number
   */
  specialization_rating_count?: number | null;
  /**
   * Lần truy cập cuối|datetime
   */
  specialization_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Là nổi bật?|checkbox
   */
  is_featured?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?|select[id,category_title]
   */
  specialization_category_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduStudentRegister {
  /**
   * ID|number
   */
  id: number;
  /**
   * Họ tên|text
   */
  student_name: string;
  /**
   * Số điện thoại|text
   */
  student_phone: string;
  /**
   * Yêu cầu khác|textarea
   */
  student_requirements?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Là nổi bật?|checkbox
   */
  is_featured?: string | null;
  /**
   * Thuộc khóa học nào?|select[id,course_title]
   */
  course_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface EduUserCourseEnroll {
  /**
   *
   */
  id: string;
  /**
   * #done; #new
   */
  enroll_status: string;
  /**
   * Thuộc học viên nào?
   */
  user_id: string;
  /**
   * Thuộc khóa học nào?
   */
  course_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface EduUserLearningProgress {
  /**
   *
   */
  id: string;
  /**
   * #done; #continue; #new
   */
  tracking_status: string;
  /**
   * Thuộc học viên nào?
   */
  user_id: string;
  /**
   * Thuộc khóa học nào?
   */
  course_id: string;
  /**
   * Thuộc bài học nào?
   */
  lesson_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ExamExamCategory {
  /**
   *
   */
  id: string;
  /**
   *
   */
  category_slug: string;
  /**
   *
   */
  category_title: string;
  /**
   *
   */
  category_content?: string | null;
  /**
   *
   */
  category_excerpt?: string | null;
  /**
   *
   */
  category_image?: string | null;
  /**
   *
   */
  category_view_count?: string | null;
  /**
   *
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ExamExam {
  /**
   *
   */
  id: string;
  /**
   *
   */
  exam_slug: string;
  /**
   *
   */
  exam_title: string;
  /**
   *
   */
  exam_content?: string | null;
  /**
   *
   */
  exam_excerpt?: string | null;
  /**
   * #exam: kỳ thi
   */
  exam_type: string;
  /**
   * #draft; #publish; #feature; #pending; #private; #trash; #auto-draft
   */
  exam_status: string;
  /**
   *
   */
  exam_image?: string | null;
  /**
   *
   */
  exam_level?: string | null;
  /**
   *
   */
  exam_marks?: string | null;
  /**
   * Thời gian bắt đầu mở kỳ thi
   */
  exam_start_time?: string | null;
  /**
   * Thời gian kết thúc kỳ thi
   */
  exam_end_time?: string | null;
  /**
   *
   */
  exam_view_count?: string | null;
  /**
   *
   */
  exam_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?
   */
  exam_category_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ExamPracticeCategory {
  /**
   *
   */
  id: string;
  /**
   *
   */
  category_slug: string;
  /**
   *
   */
  category_title: string;
  /**
   *
   */
  category_content?: string | null;
  /**
   *
   */
  category_excerpt?: string | null;
  /**
   *
   */
  category_image?: string | null;
  /**
   *
   */
  category_view_count?: string | null;
  /**
   *
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ExamPracticeSolution {
  /**
   *
   */
  id: string;
  /**
   *
   */
  solution_slug: string;
  /**
   *
   */
  solution_title: string;
  /**
   *
   */
  solution_content?: string | null;
  /**
   *
   */
  solution_excerpt?: string | null;
  /**
   * #solution: cách giải bài tập
   */
  solution_type: string;
  /**
   * #draft; #publish; #feature; #pending; #private; #trash; #auto-draft
   */
  solution_status: string;
  /**
   *
   */
  solution_image?: string | null;
  /**
   *
   */
  solution_level?: string | null;
  /**
   *
   */
  solution_marks?: string | null;
  /**
   *
   */
  solution_time?: string | null;
  /**
   *
   */
  solution_view_count?: string | null;
  /**
   * Từ khóa SEO
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thuộc bài tập nào?
   */
  practice_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ExamPractice {
  /**
   *
   */
  id: string;
  /**
   *
   */
  practice_slug: string;
  /**
   *
   */
  practice_title: string;
  /**
   *
   */
  practice_content?: string | null;
  /**
   *
   */
  practice_excerpt?: string | null;
  /**
   * #practice: bài tập
   */
  practice_type: string;
  /**
   * #draft; #publish; #feature; #pending; #private; #trash; #auto-draft
   */
  practice_status: string;
  /**
   *
   */
  practice_image?: string | null;
  /**
   *
   */
  practice_level?: string | null;
  /**
   *
   */
  practice_marks?: string | null;
  /**
   *
   */
  practice_time?: string | null;
  /**
   *
   */
  practice_expect_result?: string | null;
  /**
   *
   */
  practice_hint?: string | null;
  /**
   *
   */
  practice_try_it_template?: string | null;
  /**
   *
   */
  practice_view_count?: string | null;
  /**
   *
   */
  practice_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?
   */
  practice_category_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ExamTopicCategory {
  /**
   *
   */
  id: string;
  /**
   *
   */
  category_slug: string;
  /**
   *
   */
  category_title: string;
  /**
   *
   */
  category_content?: string | null;
  /**
   *
   */
  category_excerpt?: string | null;
  /**
   *
   */
  category_image?: string | null;
  /**
   *
   */
  category_view_count?: string | null;
  /**
   *
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ExamTopic {
  /**
   *
   */
  id: string;
  /**
   *
   */
  topic_slug: string;
  /**
   *
   */
  topic_title: string;
  /**
   *
   */
  topic_content?: string | null;
  /**
   *
   */
  topic_excerpt?: string | null;
  /**
   * #topic: bài tập
   */
  topic_type: string;
  /**
   * #draft; #publish; #feature; #pending; #private; #trash; #auto-draft
   */
  topic_status: string;
  /**
   *
   */
  topic_image?: string | null;
  /**
   *
   */
  topic_level?: string | null;
  /**
   *
   */
  topic_marks?: string | null;
  /**
   *
   */
  topic_time?: string | null;
  /**
   *
   */
  topic_expect_result?: string | null;
  /**
   *
   */
  topic_hint?: string | null;
  /**
   *
   */
  topic_try_it_template?: string | null;
  /**
   *
   */
  topic_view_count?: string | null;
  /**
   *
   */
  topic_lastest_view_time?: string | null;
  /**
   * Từ khóa SEO
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thuộc chuyên mục nào?
   */
  topic_category_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface FailedJob {
  /**
   *
   */
  id: string;
  /**
   *
   */
  uuid: string;
  /**
   *
   */
  connection: string;
  /**
   *
   */
  queue: string;
  /**
   *
   */
  payload: string;
  /**
   *
   */
  exception: string;
  /**
   *
   */
  failed_at: string;
}
export interface GeneratorCodeSnippet {
  /**
   *
   */
  id: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  description?: string | null;
  /**
   *
   */
  generator_engine: string;
  /**
   *
   */
  data_input?: string | null;
  /**
   *
   */
  data_template_blade?: string | null;
  /**
   *
   */
  data_template_ejs?: string | null;
  /**
   *
   */
  result_output?: string | null;
  /**
   *
   */
  created_at?: string | null;
  /**
   *
   */
  updated_at?: string | null;
  /**
   *
   */
  deleted_at?: string | null;
}
export interface GeneratorCodeTemplateGroup {
  /**
   *
   */
  id: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  description?: string | null;
  /**
   *
   */
  group_input_settings?: string | null;
  /**
   *
   */
  group_output_settings?: string | null;
  /**
   *
   */
  created_at?: string | null;
  /**
   *
   */
  updated_at?: string | null;
  /**
   *
   */
  deleted_at?: string | null;
}
export interface GeneratorCodeTemplate {
  /**
   *
   */
  id: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  description?: string | null;
  /**
   *
   */
  template_UI_design?: string | null;
  /**
   *
   */
  template_text?: string | null;
  /**
   *
   */
  input_settings?: string | null;
  /**
   *
   */
  output_settings?: string | null;
  /**
   *
   */
  group_id: string;
  /**
   *
   */
  created_at?: string | null;
  /**
   *
   */
  updated_at?: string | null;
  /**
   *
   */
  deleted_at?: string | null;
}
export interface Job {
  /**
   *
   */
  id: string;
  /**
   *
   */
  queue: string;
  /**
   *
   */
  payload: string;
  /**
   *
   */
  attempts: string;
  /**
   *
   */
  reserved_at?: string | null;
  /**
   *
   */
  available_at: string;
  /**
   *
   */
  created_at: string;
}
export interface Medium {
  /**
   *
   */
  id: string;
  /**
   *
   */
  model_type: string;
  /**
   *
   */
  model_id: string;
  /**
   *
   */
  uuid?: string | null;
  /**
   *
   */
  collection_name: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  file_name: string;
  /**
   *
   */
  mime_type?: string | null;
  /**
   *
   */
  disk: string;
  /**
   *
   */
  conversions_disk?: string | null;
  /**
   *
   */
  size: string;
  /**
   *
   */
  manipulations: string;
  /**
   *
   */
  custom_properties: string;
  /**
   *
   */
  generated_conversions: string;
  /**
   *
   */
  responsive_images: string;
  /**
   *
   */
  order_column?: string | null;
  /**
   *
   */
  created_at?: string | null;
  /**
   *
   */
  updated_at?: string | null;
}
export interface Migration {
  /**
   *
   */
  id: string;
  /**
   *
   */
  migration: string;
  /**
   *
   */
  batch: string;
}
export interface PmProjectNote {
  /**
   * ID|number
   */
  id: number;
  /**
   * Nội dung|textarea
   */
  content?: string | null;
  /**
   * Trạng thái|enum#new: mới tạo|#in_progress: đang tiến hành; #completed: đã hoàn thành; #on_hold: tạm hoãn; #cancelled: đã hủy
   */
  note_status: string;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc dự án nào?|select[id,project_name]
   */
  project_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface PmProject {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã dự án|text
   */
  project_code: string;
  /**
   * Tên dự án|text
   */
  project_name: string;
  /**
   * Trạng thái|enum#not_started: chưa thành lập dự án;#pending: đang chờ thành lập dự án|#new: mới thành lập dự án|#in_progress: đang tiến hành; #completed: đã hoàn thành; #on_hold: tạm hoãn
   */
  project_status: string;
  /**
   * Nội dung|textarea
   */
  project_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  project_excerpt?: string | null;
  /**
   * Ngày bắt đầu|date
   */
  project_start_date?: string | null;
  /**
   * Ngày kết thúc|date
   */
  project_end_date?: string | null;
  /**
   * Độ ưu tiên|number
   */
  priority: number;
  /**
   * Bật/Tắt|boolean
   */
  is_active: string;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopCartItem {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên sản phẩm|text
   */
  cart_item_name: string;
  /**
   * Slug sản phẩm|text
   */
  cart_item_slug: string;
  /**
   * Hình ảnh sản phẩm|image
   */
  cart_item_image: string;
  /**
   * Đơn giá|currency
   */
  cart_item_price: number;
  /**
   * Số lượng|number
   */
  cart_item_quantity: number;
  /**
   * Thành tiền|currency
   */
  cart_item_amount: number;
  /**
   * URL|text
   */
  cart_item_url: string;
  /**
   * Thuộc giỏ hàng nào?|select[id,cart_date]
   */
  cart_id: string;
  /**
   * Sản phẩm nào?|select[id,product_title]
   */
  product_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopCart {
  /**
   * IDnumber
   */
  id: string;
  /**
   * Ngày đặt hàng|datetime
   */
  cart_date: string;
  /**
   * Thuộc khách hàng nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopOrderDetail {
  /**
   * ID|number
   */
  id: number;
  /**
   * Đơn giá|currency
   */
  amount: number;
  /**
   * Số lượng|number
   */
  quantity: number;
  /**
   * Đơn giá|currency
   */
  price: number;
  /**
   * Giảm giá|number
   */
  discount?: number | null;
  /**
   * Loại giảm giá|enum|#fixed: số tiền cố định; #percent: phần trăm
   */
  discount_type?: "fixed" | "percent" | null;
  /**
   * Có thể tải xuống|boolean
   */
  can_download?: string | null;
  /**
   * Thuộc đơn hàng nào?|select[id,order_code]
   */
  order_id: string;
  /**
   * Thuộc sản phẩm nào?|select[id,product_title]
   */
  product_id: string;
  /**
   * Thuộc khách hàng nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopOrderEnrollMapping {
  /**
   *
   */
  id: string;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thuộc đơn đặt hàng nào?
   */
  order_id: string;
  /**
   * Thuộc lần ghi danh học nào?
   */
  enroll_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ShopOrder {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã đơn hàng|text
   */
  order_code: string;
  /**
   * Tiêu đề đơn hàng|text
   */
  order_title: string;
  /**
   * Ngày đặt hàng|datetime
   */
  order_date: string;
  /**
   * Trạng thái đơn hàng|enum|#new: mới đặt hàng; #confirmed: đã xác nhận; #processing: đang xử lý (chuẩn bị hàng); #shipping: đang giao hàng; #shipped: đã giao hàng đơn vị vận chuyển; #delivered: giao hàng thành công; #completed: đã hoàn thành; #cancelled: bị hủy; #returned: bị trả hàng; #failed: thất bại
   */
  order_status:
    | "new"
    | "confirmed"
    | "processing"
    | "shipping"
    | "shipped"
    | "delivered"
    | "completed"
    | "cancelled"
    | "returned"
    | "failed";
  /**
   * Trạng thái thanh toán|enum|#pending: chờ thanh toán; #paid: đã thanh toán; #failed: thanh toán thất bại; #refunded: đã hoàn tiền
   */
  payment_status: "pending" | "paid" | "failed" | "refunded";
  /**
   * Tổng tiền|currency
   */
  order_total?: number | null;
  /**
   * Họ tên khách hàng|text
   */
  billing_name: string;
  /**
   * SĐT khách hàng|text
   */
  billing_telephone: string;
  /**
   * Email khách hàng|text
   */
  billing_email?: string | null;
  /**
   * Địa chỉ giao hàng|text
   */
  billing_address?: string | null;
  /**
   * Ghi chú đơn hàng|text
   */
  billing_note?: string | null;
  /**
   * Ngày đặt hàng|date
   */
  delivery_date?: string | null;
  /**
   * Thời gian giao hàng|text
   */
  delivery_time?: string | null;
  /**
   * Yêu cầu hóa đơn?|boolean
   */
  company_invoice_is_required: string;
  /**
   * Tên công ty|text
   */
  company_invoice_company_name?: string | null;
  /**
   * Mã số thuế|text
   */
  company_invoice_company_tax?: string | null;
  /**
   * Email công ty|text
   */
  company_invoice_company_email?: string | null;
  /**
   * Địa chỉ công ty|text
   */
  company_invoice_company_address?: string | null;
  /**
   * Thuộc khách hàng nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Phương thức thanh toán nào?|select[id,payment_title]
   */
  payment_id: string;
  /**
   * Phương thức vận chuyển nào?|select[id,shipping_title]
   */
  shipping_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopPaymentType {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  payment_code: string;
  /**
   * Slug|text
   */
  payment_slug: string;
  /**
   * Tiêu đề|text
   */
  payment_title: string;
  /**
   * Nội dung|textarea
   */
  payment_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  payment_excerpt?: string | null;
  /**
   * Trạng thái|enum|#active: đang sử dụng; #inactive: ngưng sử dụng
   */
  payment_status: "active" | "inactive";
  /**
   * Ảnh minh họa|image
   */
  payment_image?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc media nào?|select[id,media_name]
   */
  media_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopProductAttributeValue {
  /**
   *
   */
  id: string;
  /**
   * Giá trị thuộc tính
   */
  value: string;
  /**
   * Thuộc sản phẩm nào?
   */
  product_id: string;
  /**
   * Thuộc tính nào?
   */
  attribute_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ShopProductAttribute {
  /**
   *
   */
  id: string;
  /**
   * Mã thuộc tính
   */
  code: string;
  /**
   * Tiêu đề thuộc tính
   */
  title: string;
  /**
   * Kiểu dữ liệu của thuộc tính
   */
  data_type: string;
  /**
   * Thuộc tính này có dùng để tìm kiếm hay không?
   */
  is_filterable: string;
  /**
   * Mô tả về thuộc tính
   */
  description: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ShopProductBundleRelation {
  /**
   *
   */
  id: string;
  /**
   * loại quan hệ
   */
  relation_type: string;
  /**
   * Sản phẩm cha là sản phẩm nào?
   */
  product_parent_id: string;
  /**
   * Sản phẩm con là sản phẩm nào?
   */
  product_child_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ShopProductCategory {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  category_code: string;
  /**
   * Slug|text
   */
  category_slug: string;
  /**
   * Tiêu đề|text
   */
  category_title: string;
  /**
   * Nội dung|textarea
   */
  category_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  category_excerpt?: string | null;
  /**
   * Trạng thái|enum|#active: đang sử dụng; #inactive: ngưng sử dụng
   */
  category_status: "active" | "inactive";
  /**
   * Ảnh minh họa|image
   */
  category_image?: string | null;
  /**
   * Lượt xem|number
   */
  category_view_count?: number | null;
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc media nào?|select[id,media_name]
   */
  media_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopProductComment {
  /**
   * ID|number
   */
  id: number;
  /**
   * Nội dung|textarea
   */
  product_comment_content?: string | null;
  /**
   * Trạng thái|enum|#pending: đang xét duyệt; #approved: đã duyệt; #trash: thùng rác; #auto-draft: tự động lưu
   */
  product_comment_status: "pending" | "approved" | "trash" | "auto_draft";
  /**
   * Đánh giá|number
   */
  product_comment_rating: number;
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc khách hàng nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Sản phẩm nào?|select[id,product_title]
   */
  product_id: string;
  /**
   * Thuộc đơn hàng nào?|select[id,order_code]
   */
  order_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopProductCourseMapping {
  /**
   *
   */
  id: string;
  /**
   * Thuộc tác giả nào?
   */
  user_id: string;
  /**
   * Thuộc sản phẩm nào?
   */
  product_id: string;
  /**
   * Thuộc khóa học nào?
   */
  course_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopProductFile {
  /**
   * ID|number
   */
  id: number;
  /**
   * Phiên bản|text
   */
  product_file_version?: string | null;
  /**
   * Tên file|text
   */
  product_file_name?: string | null;
  /**
   * Đường dẫn lưu file|text
   */
  product_file_path?: string | null;
  /**
   * Mô tả|textarea
   */
  product_file_description?: string | null;
  /**
   * Nhật ký thay đổi phiên bản|textarea
   */
  product_file_changelog?: string | null;
  /**
   * Là phiên bản mới nhất?|boolean
   */
  product_file_is_latest?: string | null;
  /**
   * Là file cho xem trước?|boolean
   */
  product_file_is_preview?: string | null;
  /**
   * Sản phẩm nào?|select[id,product_title]
   */
  product_id: string;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopProductGroupRelation {
  /**
   *
   */
  id: string;
  /**
   * loại quan hệ
   */
  relation_type: string;
  /**
   * Sản phẩm cha là sản phẩm nào?
   */
  product_parent_id: string;
  /**
   * Sản phẩm con là sản phẩm nào?
   */
  product_child_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ShopProductImage {
  /**
   * ID|number
   */
  id: number;
  /**
   * Ảnh minh họa|image
   */
  product_image?: string | null;
  /**
   * Tiều đề|text
   */
  product_image_caption?: string | null;
  /**
   * Diễn giải|textarea
   */
  product_image_description?: string | null;
  /**
   * Thuộc sản phẩm nào?|select[id,product_title]
   */
  product_id: string;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thời điểm tạo
   */
  created_at: string;
  /**
   * Thời điểm cập nhật
   */
  updated_at: string;
  /**
   * Thời điểm xóa
   */
  deleted_at?: string | null;
  /**
   * Người tạo
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật
   */
  updated_by_id?: string | null;
  /**
   * Người xóa
   */
  deleted_by_id?: string | null;
}
export interface ShopProductSupplier {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  supplier_code: string;
  /**
   * Slug|text
   */
  supplier_slug: string;
  /**
   * Tiêu đề|text
   */
  supplier_title: string;
  /**
   * Nội dung|textarea
   */
  supplier_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  supplier_excerpt?: string | null;
  /**
   * Trạng thái|enum|#active: đang sử dụng; #inactive: ngưng sử dụng
   */
  supplier_status: "active" | "inactive";
  /**
   * Ảnh minh họa|image
   */
  supplier_image?: string | null;
  /**
   * Lượt xem|number
   */
  supplier_view_count?: number | null;
  /**
   * Cây quan hệ|text
   */
  parent_path?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc cha nào?|select[id,category_title]
   */
  parent_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc media nào?|select[id,media_name]
   */
  media_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopProduct {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  product_code: string;
  /**
   * Slug|text
   */
  product_slug: string;
  /**
   * Tiêu đề|text
   */
  product_title: string;
  /**
   * Nội dung|textarea
   */
  product_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  product_excerpt?: string | null;
  /**
   * Thể loại|enum|#product_simple: sản phẩm đơn giản; #product_configurable: sản phẩm cấu hình; #product_grouped: sản phẩm nhóm; #product_downloadable: sản phẩm tải về; #product_gift_card: sản phẩm thẻ quà tặng; #product_bundle: sản phẩm gói tùy chọn; #product_virtual: sản phẩm ảo; #product_course: sản phẩm là khóa học
   */
  product_type:
    | "product_simple"
    | "product_configurable"
    | "product_grouped"
    | "product_downloadable"
    | "product_gift_card"
    | "product_bundle"
    | "product_virtual"
    | "product_course";
  /**
   * Trạng thái|enum|#draft: bản nháp; #publish: công bố; #feature: nổi bật; #pending: đang xét duyệt; #private: riêng tư; #trash: thùng rác; #auto-draft: tự động lưu
   */
  product_status:
    | "draft"
    | "publish"
    | "feature"
    | "pending"
    | "private"
    | "trash"
    | "auto_draft";
  /**
   * Ảnh minh họa|image
   */
  product_image?: string | null;
  /**
   * Đơn giá|currency
   */
  product_price?: number | null;
  /**
   * Số lượng|number
   */
  product_quantity_in_stock?: number | null;
  /**
   * Lượt xem|number
   */
  product_view_count?: number | null;
  /**
   * Đánh giá|number
   */
  product_rating_count?: number | null;
  /**
   * Là nổi bật?|boolean
   */
  is_featured?: string | null;
  /**
   * Là mới?|boolean
   */
  is_new?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc chuyên mục nào?|select[id,category_title]
   */
  product_category_id?: string | null;
  /**
   * Thuộc nhà cung cấp nào?|select[id,supplier_title]
   */
  product_supplier_id?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc media nào?|select[id,media_name]
   */
  media_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface ShopShippingType {
  /**
   * ID|number
   */
  id: number;
  /**
   * Mã|text
   */
  shipping_code: string;
  /**
   * Slug|text
   */
  shipping_slug: string;
  /**
   * Tiêu đề|text
   */
  shipping_title: string;
  /**
   * Nội dung|textarea
   */
  shipping_content?: string | null;
  /**
   * Tóm tắt|textarea
   */
  shipping_excerpt?: string | null;
  /**
   * Trạng thái|enum|#active: đang sử dụng; #inactive: ngưng sử dụng
   */
  shipping_status: "active" | "inactive";
  /**
   * Ảnh minh họa|image
   */
  shipping_image?: string | null;
  /**
   * Từ khóa SEO|textarea
   */
  seo_keywords?: string | null;
  /**
   * Diễn giải SEO|textarea
   */
  seo_description?: string | null;
  /**
   * Thuộc tác giả nào?|select[id,full_name]
   */
  user_id: string;
  /**
   * Thuộc media nào?|select[id,media_name]
   */
  media_id?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface SwActor {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên|text
   */
  actor_name: string;
  /**
   * Diễn giải|textarea
   */
  actor_description?: string | null;
  /**
   * Trạng thái|enum|#active: đang hoạt động; #deactive: ngừng hoạt động
   */
  actor_status: "active" | "deactive";
  /**
   * Ảnh minh họa|image
   */
  actor_image?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface SwSoftwareFeatureGroup {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên|text
   */
  feature_group_name: string;
  /**
   * Diễn giải|textarea
   */
  feature_group_description?: string | null;
  /**
   * Trạng thái|enum|#active: đang hoạt động; #deactive: ngừng hoạt động
   */
  feature_group_status: "active" | "deactive";
  /**
   * Ảnh minh họa|image
   */
  feature_group_image?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface SwSoftwareFeature {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên|text
   */
  feature_name: string;
  /**
   * Diễn giải|textarea
   */
  feature_description?: string | null;
  /**
   * Trạng thái|enum|#active: đang hoạt động; #deactive: ngừng hoạt động
   */
  feature_status: "active" | "deactive";
  /**
   * Ảnh minh họa|image
   */
  feature_image?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface SwSoftware {
  /**
   * ID|number
   */
  id: number;
  /**
   * Tên|text
   */
  software_name: string;
  /**
   * Diễn giải|textarea
   */
  software_description?: string | null;
  /**
   * Trạng thái|enum|#active: đang hoạt động; #deactive: ngừng hoạt động
   */
  software_status: "active" | "deactive";
  /**
   * Ảnh minh họa|image
   */
  software_image?: string | null;
  /**
   * Thời điểm tạo|datetime
   */
  created_at: string;
  /**
   * Thời điểm cập nhật|datetime
   */
  updated_at: string;
  /**
   * Thời điểm xóa|datetime
   */
  deleted_at?: string | null;
  /**
   * Người tạo|select[id,full_name]
   */
  created_by_id?: string | null;
  /**
   * Người cập nhật|select[id,full_name]
   */
  updated_by_id?: string | null;
  /**
   * Người xóa|select[id,full_name]
   */
  deleted_by_id?: string | null;
}
export interface TelescopeEntry {
  /**
   *
   */
  sequence: string;
  /**
   *
   */
  uuid: string;
  /**
   *
   */
  batch_id: string;
  /**
   *
   */
  family_hash?: string | null;
  /**
   *
   */
  should_display_on_index: string;
  /**
   *
   */
  type: string;
  /**
   *
   */
  content: string;
  /**
   *
   */
  created_at?: string | null;
}
export interface TelescopeEntriesTag {
  /**
   *
   */
  entry_uuid: string;
  /**
   *
   */
  entry_uuid: string;
  /**
   *
   */
  tag: string;
}
export interface TelescopeMonitoring {
  /**
   *
   */
  tag: string;
}
