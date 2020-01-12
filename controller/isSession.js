module.exports = function isSession(req, res, role) {
    if (req.session.isLogin) {
        switch (role) {
            case 1: {
                switch (req.session.role_id) {
                    case 2: {
                        res.redirect('/admin');
                    }
                    case 3: {
                        res.redirect('/tentor');
                        break;
                    }
                    case 4: {
                        res.redirect('/siswa');
                        break;
                    }
                    case 5: {
                        res.redirect('/wali');
                        break;
                    }
                }
                break;
            }
            case 2: {
                switch (req.session.role_id) {
                    case 1: {
                        res.redirect('/aquamatika');
                        break;
                    }
                    case 3: {
                        res.redirect('/tentor');
                        break;
                    }
                    case 4: {
                        res.redirect('/siswa');
                        break;
                    }
                    case 5: {
                        res.redirect('/wali');
                        break;
                    }
                }
                break;
            }
            case 3: {
                switch (req.session.role_id) {
                    case 1: {
                        res.redirect('/aquamatika');
                        break;
                    }
                    case 2: {
                        res.redirect('/admin');
                    }
                    case 4: {
                        res.redirect('/siswa');
                        break;
                    }
                    case 5: {
                        res.redirect('/wali');
                        break;
                    }
                }
                break;
            }
            case 4: {
                switch (req.session.role_id) {
                    case 1: {
                        res.redirect('/aquamatika');
                        break;
                    }
                    case 2: {
                        res.redirect('/admin');
                    }
                    case 3: {
                        res.redirect('/tentor');
                        break;
                    }
                    case 5: {
                        res.redirect('/wali');
                        break;
                    }
                }
                break;
            }
            case 5: {
                switch (req.session.role_id) {
                    case 1: {
                        res.redirect('/aquamatika');
                        break;
                    }
                    case 2: {
                        res.redirect('/admin');
                    }
                    case 3: {
                        res.redirect('/tentor');
                        break;
                    }
                    case 4: {
                        res.redirect('/siswa');
                        break;
                    }
                }
                break;
            }
        }
    } else {
        res.redirect('/auth');
    }
}