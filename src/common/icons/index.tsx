import React from 'react'

type IIcons = {
    onClick?: () => void
}

export const Icons = {
  close({ onClick }: IIcons) {
    return (
      <svg onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.266 14.6944L13.5721 10.0006L18.266 5.30669C18.6742 4.89853 18.6742 4.28628 18.266 3.87812L16.1231 1.73526C15.715 1.3271 15.1027 1.3271 14.6946 1.73526L10.0007 6.42914L5.30681 1.73526C4.89865 1.3271 4.2864 1.3271 3.87824 1.73526L1.73538 3.87812C1.32722 4.28628 1.32722 4.89853 1.73538 5.30669L6.42926 10.0006L1.73538 14.6944C1.32722 15.1026 1.32722 15.7149 1.73538 16.123L3.87824 18.2659C4.2864 18.674 4.89865 18.674 5.30681 18.2659L10.0007 13.572L14.6946 18.2659C15.1027 18.674 15.715 18.674 16.1231 18.2659L18.266 16.123C18.6742 15.7149 18.6742 15.1026 18.266 14.6944Z" fill="#344273" />
      </svg>
    )
  },
  info() {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0C3.15 0 0 3.15 0 7C0 10.85 3.15 14 7 14C10.85 14 14 10.85 14 7C14 3.15 10.85 0 7 0ZM7.7 10.5H6.3V6.3H7.7V10.5ZM7.7 4.9H6.3V3.5H7.7V4.9Z" fill="black" fillOpacity="0.5" />
      </svg>
    )
  },
  paperBucket({ onClick }: IIcons) {
    return (
      <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3608 0.444637H8.90786C8.88313 0.195108 8.67253 0 8.41632 0H5.58354C5.32731 0 5.11676 0.195108 5.09204 0.444637H1.63911C1.36621 0.444637 1.14502 0.665824 1.14502 0.938801V1.87753C1.14502 2.15053 1.36621 2.37165 1.63911 2.37165H12.3608C12.6337 2.37165 12.8549 2.15051 12.8549 1.87753V0.938824C12.8549 0.665824 12.6337 0.444637 12.3608 0.444637Z" fill="#E46F6F" fillOpacity="0.5" />
        <path d="M2.18079 3.32081V13.5059C2.18079 13.7786 2.40197 14 2.67488 14H11.3248C11.5978 14 11.8188 13.7787 11.8188 13.5059V3.32081H2.18079ZM5.79821 10.9653C5.79821 11.2661 5.55431 11.5101 5.25353 11.5101C4.9526 11.5101 4.70886 11.2661 4.70886 10.9653V5.56507C4.70886 5.26427 4.9526 5.02039 5.25353 5.02039C5.55431 5.02039 5.79821 5.2643 5.79821 5.56507V10.9653ZM9.29098 10.9653C9.29098 11.2661 9.04708 11.5101 8.74621 11.5101C8.44535 11.5101 8.20154 11.2661 8.20154 10.9653V5.56507C8.20154 5.26427 8.44537 5.02039 8.74621 5.02039C9.04705 5.02039 9.29098 5.2643 9.29098 5.56507V10.9653Z" fill="#E46F6F" fillOpacity="0.5" />
      </svg>
    )
  },
  pencil({ onClick }: IIcons) {
    return (
      <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <g clipPath="url(#clip0)">
            <path d="M1.06181 11.9008C0.93735 12.1977 1.00471 12.5403 1.23231 12.7679C1.45992 12.9955 1.8025 13.0628 2.09932 12.9383L5.00028 11.7219L2.2782 8.99989L1.06181 11.9008Z" fill="#344273" />
            <path d="M12.768 3.19383L10.8063 1.23214C10.4967 0.922601 9.99486 0.922601 9.68529 1.23214L3.00502 7.91253C3.00332 7.91419 3.0019 7.91605 3.00024 7.91774L6.08245 11C6.08415 10.9983 6.086 10.9969 6.08766 10.9952L12.768 4.31486C13.0775 4.00529 13.0775 3.50341 12.768 3.19383Z" fill="#344273" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="12" height="12" fill="white" transform="translate(1 1)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  alert() {
    return (
      <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6789 8.86407L6.06375 0.402659C5.99561 0.278493 5.90146 0.180302 5.78108 0.108232C5.661 0.0360983 5.53075 0 5.39055 0C5.25035 0 5.12008 0.0361614 4.99993 0.108232C4.87979 0.180302 4.78557 0.278493 4.7175 0.402659L0.102269 8.86407C-0.0379779 9.11661 -0.0339787 9.36901 0.114266 9.6214C0.182443 9.73752 0.275582 9.82972 0.393749 9.89772C0.512 9.96586 0.639175 10 0.775401 10H10.0058C10.1422 10 10.2693 9.96586 10.3875 9.89772C10.5058 9.82974 10.5988 9.73752 10.667 9.6214C10.8152 9.36886 10.8193 9.11661 10.6789 8.86407ZM6.15996 8.26311C6.15996 8.31915 6.1408 8.36619 6.10292 8.40422C6.06488 8.44234 6.0198 8.46127 5.96764 8.46127H4.81384C4.76177 8.46127 4.71668 8.44234 4.67865 8.40422C4.64057 8.36619 4.62154 8.31915 4.62154 8.26311V7.12127C4.62154 7.06524 4.64059 7.0182 4.67865 6.98016C4.71668 6.94204 4.7617 6.92312 4.81384 6.92312H5.96755C6.01973 6.92312 6.0648 6.94204 6.10285 6.98016C6.1408 7.0182 6.1599 7.06524 6.1599 7.12127V8.26311H6.15996ZM6.14802 6.01566C6.14386 6.05569 6.12281 6.08869 6.08486 6.11477C6.04674 6.14083 5.99969 6.1538 5.9436 6.1538H4.83182C4.77576 6.1538 4.72769 6.14075 4.68765 6.11477C4.64749 6.08861 4.6275 6.05569 4.6275 6.01551L4.52535 3.2693C4.52535 3.21317 4.54541 3.17111 4.58546 3.1431C4.63754 3.09904 4.68561 3.077 4.72973 3.077H6.05177C6.09593 3.077 6.14396 3.09896 6.19604 3.1431C6.23607 3.17111 6.25605 3.20919 6.25605 3.25726L6.14802 6.01566Z" fill="#C23E42" />
      </svg>
    )
  },
  loading() {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="7.5" stroke="white" strokeOpacity="0.5" strokeWidth="3" />
        <mask id="path-2-inside-1" fill="white">
          <path d="M9 18C7.8181 18 6.64778 17.7672 5.55585 17.3149C4.46392 16.8626 3.47177 16.1997 2.63604 15.364C1.80031 14.5282 1.13738 13.5361 0.685083 12.4442C0.232791 11.3522 -4.45065e-07 10.1819 -3.93402e-07 9L3.00439 9C3.00439 9.78735 3.15947 10.567 3.46077 11.2944C3.76208 12.0218 4.20372 12.6828 4.76046 13.2395C5.3172 13.7963 5.97816 14.2379 6.70558 14.5392C7.433 14.8405 8.21264 14.9956 9 14.9956L9 18Z" />
        </mask>
        <path d="M9 18C7.8181 18 6.64778 17.7672 5.55585 17.3149C4.46392 16.8626 3.47177 16.1997 2.63604 15.364C1.80031 14.5282 1.13738 13.5361 0.685083 12.4442C0.232791 11.3522 -4.45065e-07 10.1819 -3.93402e-07 9L3.00439 9C3.00439 9.78735 3.15947 10.567 3.46077 11.2944C3.76208 12.0218 4.20372 12.6828 4.76046 13.2395C5.3172 13.7963 5.97816 14.2379 6.70558 14.5392C7.433 14.8405 8.21264 14.9956 9 14.9956L9 18Z" stroke="white" strokeWidth="6" mask="url(#path-2-inside-1)" />
      </svg>
    )
  }
}
