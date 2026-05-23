import { useMemo } from 'react';

interface Props {
    label?: string;
    file: File | null;
    onChange: (file: File | null) => void;

    previewBackground?: string;

    height?: string;

    previewClassName?: string;

    accept?: string;
}

export default function ImageUpload({
    label = 'Upload Image',
    file,
    onChange,

    previewBackground = '#ffffff',

    height = '180px',

    previewClassName = '',

    accept = 'image/*',
}: Props) {
    const preview = useMemo(() => {
        if (!file) return null;

        return URL.createObjectURL(file);
    }, [file]);

    return (
        <div className="mb-20">
            <label className="label fs-16 mb-2">
                {label}
            </label>

            <input
                type="file"
                className="form-control mb-3"
                accept={accept}
                onChange={(e) =>
                    onChange(
                        e.target.files?.[0] || null
                    )
                }
            />

            <div
                className={`d-flex align-items-center justify-content-center rounded-3 border ${previewClassName}`}
                style={{
                    background:
                        previewBackground,
                    minHeight: height,
                    border:
                        '1px dashed #dbe4ee',
                }}
            >
                {preview ? (
                    <img
                        src={preview}
                        alt="Preview"
                        style={{
                            maxWidth: '220px',
                            maxHeight: '100px',
                            objectFit: 'contain',
                        }}
                    />
                ) : (
                    <span className="text-muted">
                        No Image Selected
                    </span>
                )}
            </div>
        </div>
    );
}